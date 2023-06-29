package com.puur.leaslydemo.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import com.amazonaws.auth.*;
import com.amazonaws.services.dynamodbv2.*;
import com.ulisesbocchio.jasyptspringboot.annotation.EnableEncryptableProperties;
import org.socialsignin.spring.data.dynamodb.repository.config.EnableDynamoDBRepositories;
import org.springframework.util.StringUtils;
@Configuration
@EnableEncryptableProperties
@EnableDynamoDBRepositories(basePackages = "com.puur.leaslydemo.repositories")
public class DynamoDbConfig {

    @Value("${aws.accessKeyId}")
    private String amazonAWSAccessKey;

    @Value("${aws.secretKey}")
    private String amazonAWSSecretKey;

    @Value("${aws.dynamodb.endpoint}")
    private String amazonDynamoDBEndpoint;

    @Value("${aws.region}")
    private String awsRegion;

    @Bean
    public AmazonDynamoDB amazonDynamoDB() {
        AmazonDynamoDB amazonDynamoDB = new AmazonDynamoDBClient(amazonAWSCredentials());
        
        if (!StringUtils.isEmpty(amazonDynamoDBEndpoint)) {
            amazonDynamoDB.setEndpoint(amazonDynamoDBEndpoint);
        }
        
        return amazonDynamoDB;
    }

    @Bean
    public AWSCredentials amazonAWSCredentials() {
        return new BasicAWSCredentials(
          amazonAWSAccessKey, amazonAWSSecretKey);
    }
}
