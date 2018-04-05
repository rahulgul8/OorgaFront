package com.oorga.spring.services;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.Arrays;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.util.UriComponentsBuilder;

import com.netflix.zuul.ZuulFilter;
import com.netflix.zuul.context.RequestContext;

public class SEOBotFilter extends ZuulFilter {

	private static Logger log = LoggerFactory.getLogger(SEOBotFilter.class);

	@Override
	public String filterType() {
		return "pre";
	}

	@Override
	public int filterOrder() {
		return 6;
	}

	@Override
	public boolean shouldFilter() {
		return true;
	}

	static final List<String> botNames = Arrays
			.asList("WhatsApp,googlebot,bingbot,facebookexternalhit,twitterbot,Google (+https://developers.google.com/+/web/snippet/),yandexbot,slurp,duckduckbot,linkedinbot,embedly,baiduspider,pinterest,slackbot,vkshare,facebot,outbrain,w3c_validator"
					.toLowerCase().split(","));

	static final String rendertronURL = "http://default-environment.7jqmx3dxvm.us-west-2.elasticbeanstalk.com/";

	static final String apiEndpoint = "/render/";

	static String getURL(String appUrl) {
		String url = UriComponentsBuilder.fromHttpUrl(rendertronURL).path(apiEndpoint).build()
				.toUriString()+appUrl;
		return url;
	}

	@Override
	public Object run() {
		RequestContext ctx = RequestContext.getCurrentContext();
		HttpServletRequest request = ctx.getRequest();
		String header = request.getHeader("user-agent");
		log.info("Checking for the header " + header);
		if (header != null) {
			header = header.toLowerCase();
			for (String botName : botNames) {
				if (header.contains(botName)) {
					request.setAttribute("OorgaRedirect", "true");
					request.getSession().setAttribute("OorgaRedirect", "true");
					log.info("Bot detected, hence redirecting to rendertron - " + header);
					try {
						redirect(ctx, request.getRequestURL().toString());
					} catch (Exception e) {
						log.error("Exception or redirecting .. " + e);
					}
					break;
				}
			}
		}
		log.info(String.format("%s request to %s", request.getMethod(), request.getRequestURL().toString()));

		return null;
	}

	private void redirect(RequestContext ctx, String appUrl) throws MalformedURLException {
		String url = getURL(appUrl);
		log.info("redirecting to url = " + url);
		ctx.setRouteHost(new URL(url));
	}

}
