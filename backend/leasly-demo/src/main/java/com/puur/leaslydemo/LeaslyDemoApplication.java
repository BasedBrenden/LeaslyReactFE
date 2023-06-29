package com.puur.leaslydemo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
@SpringBootApplication(exclude={DataSourceAutoConfiguration.class})

@ComponentScan(basePackages = {"com.puur.leaslydemo"})
public class LeaslyDemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(LeaslyDemoApplication.class, args);
	}

}
