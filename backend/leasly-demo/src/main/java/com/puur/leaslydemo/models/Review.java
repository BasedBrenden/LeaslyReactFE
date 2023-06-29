package com.puur.leaslydemo.models;

import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBAttribute;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBDocument;

@DynamoDBDocument
public class Review {
    private String userId;
    private String description;
    private int rating;
    private String apartmentName;

    public Review() {

    }

    public Review(String userId, String description, int rating, String apartmentName) {
        this.userId = userId;
        this.description = description;
        this.rating = rating;
        this.apartmentName = apartmentName;
    }

    @DynamoDBAttribute(attributeName = "userId")
    public String getUserId() {
        return userId;
    }

    @DynamoDBAttribute(attributeName = "description")
    public String getDescription() {
        return description;
    }

    @DynamoDBAttribute(attributeName = "rating")
    public int getRating() {
        return rating;
    }

    @DynamoDBAttribute(attributeName = "apartmentName")
    public String getApartmentName() {
        return apartmentName;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    public void setApartmentName(String apartmentName) {
        this.apartmentName = apartmentName;
    }

}
