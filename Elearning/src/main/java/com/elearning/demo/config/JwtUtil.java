package com.elearning.demo.config;

import java.util.Arrays;
import java.util.Collection;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import io.jsonwebtoken.*;
@Service
public class JwtUtil {
	private String secret;
	private int jwtExpirationInMs;

	@Value("${jwt.secret}")
	public void setSecret(String secret) {
		this.secret = secret;
	}
	
	@Value("${jwt.ExpirationInMs}")
	public void setJwtExpirationInMs(int jwtExpirationInMs) {
		this.jwtExpirationInMs = jwtExpirationInMs;
	}

	// generate token for user
	public String generateToken(UserDetails userDetails) {
		Map<String, Object> claims = new HashMap<>();
		Collection<? extends GrantedAuthority> roles = userDetails.getAuthorities();
		if (roles.contains(new SimpleGrantedAuthority("ROLE_ADMIN"))) {
			claims.put("isAdmin", true);
		}
		if (roles.contains(new SimpleGrantedAuthority("ROLE_STUDENT"))) {
			claims.put("isStudent", true);
		}
		if (roles.contains(new SimpleGrantedAuthority("ROLE_PROFESSOR"))) {
			claims.put("isProfessor", true);
		}
		return doGenerateToken(claims, userDetails.getUsername());
	}

	private String doGenerateToken(Map<String, Object> claims, String subject) {

		return Jwts.builder().setClaims(claims).setSubject(subject).setIssuedAt(new Date(System.currentTimeMillis()))
				.setExpiration(new Date(System.currentTimeMillis() + jwtExpirationInMs)).signWith(SignatureAlgorithm.HS512, secret).compact();
	}
	public boolean validateToken(String authToken) {
		try {
		
		    Jws<Claims> claims = Jwts.parser().setSigningKey(secret).parseClaimsJws(authToken);
			return true;
		} catch (SignatureException | MalformedJwtException | UnsupportedJwtException | IllegalArgumentException ex) {
			throw new BadCredentialsException("INVALID_CREDENTIALS", ex);
		} catch (ExpiredJwtException ex) {
			throw new BadCredentialsException("Token has Expired", ex);
		}
	}
	
	public String getUsernameFromToken(String token) {
		Claims claims = Jwts.parser().setSigningKey(secret).parseClaimsJws(token).getBody();

		return claims.getSubject();
	}

	public List<SimpleGrantedAuthority> getRolesFromToken(String authToken) {
		List<SimpleGrantedAuthority> roles = null;
		Claims claims = Jwts.parser().setSigningKey(secret).parseClaimsJws(authToken).getBody();
		Boolean isAdmin = claims.get("isAdmin", Boolean.class);
		Boolean isStudent = claims.get("isStudent", Boolean.class);
		Boolean isProfessor = claims.get("isProfessor", Boolean.class);
		if (isAdmin != null && isAdmin == true) {
			roles = Arrays.asList(new SimpleGrantedAuthority("ROLE_ADMIN"));
		}
		if (isStudent != null && isStudent == true) {
			roles = Arrays.asList(new SimpleGrantedAuthority("ROLE_STUDENT"));
		}
		if (isProfessor != null && isProfessor == true) {
			roles = Arrays.asList(new SimpleGrantedAuthority("ROLE_PROFESSOR"));
		}
		return roles;
	}

}
