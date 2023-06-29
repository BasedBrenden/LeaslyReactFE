package com.puur.leaslydemo.models;

import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBAttribute;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBDocument;

@DynamoDBDocument
public class Sublease {
    private String apartmentName;
    private String leaserId;
    private String description;
    private int rent;
    private String startDate;
    private String endDate;
    private int bedrooms;
    private int bathrooms;
    private int sqft;

    public Sublease() {

    }

    public Sublease(String leaserId, String description, int rent, String startDate, String endDate, int bedrooms, int bathrooms, int sqft, String apartmentName) {
        this.leaserId = leaserId;
        this.description = description;
        this.rent = rent;
        this.startDate = startDate;
        this.endDate = endDate;
        this.bedrooms = bedrooms;
        this.bathrooms = bathrooms;
        this.sqft = sqft;
        this.apartmentName = apartmentName;
    }

    @DynamoDBAttribute(attributeName = "leaserId")
    public String getLeaserId() {
        return leaserId;
    }

    @DynamoDBAttribute(attributeName = "description")
    public String getDescription() {
        return description;
    }

    @DynamoDBAttribute(attributeName = "rent")
    public int getRent() {
        return rent;
    }

    @DynamoDBAttribute(attributeName = "startDate")
    public String getStartDate() {
        return startDate;
    }

    @DynamoDBAttribute(attributeName = "endDate")
    public String getEndDate() {
        return endDate;
    }

    @DynamoDBAttribute(attributeName = "bedrooms")
    public int getBedrooms() {
        return bedrooms;
    }

    @DynamoDBAttribute(attributeName = "bathrooms")
    public int getBathrooms() {
        return bathrooms;
    }

    @DynamoDBAttribute(attributeName = "sqft")
    public int getSqft() {
        return sqft;
    }

    @DynamoDBAttribute(attributeName = "apartmentName")
    public String getApartmentName() {
        return apartmentName;
    }

    public void setLeaserId(String leaserId) {
        this.leaserId = leaserId;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setRent(int rent) {
        this.rent = rent;
    }

    public void setStartDate(String startDate) {
        this.startDate = startDate;
    }

    public void setEndDate(String endDate) {
        this.endDate = endDate;
    }

    public void setBedrooms(int bedrooms) {
        this.bedrooms = bedrooms;
    }

    public void setBathrooms(int bathrooms) {
        this.bathrooms = bathrooms;
    }

    public void setSqft(int sqft) {
        this.sqft = sqft;
    }

    public void setApartmentName(String apartmentName) {
        this.apartmentName = apartmentName;
    }

}
