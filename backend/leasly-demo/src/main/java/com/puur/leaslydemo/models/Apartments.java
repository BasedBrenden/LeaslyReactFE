package com.puur.leaslydemo.models;

import java.util.List;
import org.springframework.stereotype.Service;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBAttribute;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBDocument;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBHashKey;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBTable;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapperFieldModel;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBTyped;

@Service
@DynamoDBTable(tableName = "leasly-apartments")
@DynamoDBDocument
public class Apartments {
    @DynamoDBHashKey(attributeName = "leasly1")
    private String name;
    private String address;
    private String phoneString;
    private String photo;
    private int rating;
    private List<Review> reviews;
    private List<Sublease> subleases;
    private Amenities amenities;

    public Apartments() {

    }

    public Apartments(String name, String address, String phoneString, String photo, int rating, List<Review> reviews, List<Sublease> subleases, Amenities amenities) {
        this();
        this.name = name;
        this.address = address;
        this.phoneString = phoneString;
        this.photo = photo;
        this.rating = rating;
        this.reviews = reviews;
        this.subleases = subleases;
        this.amenities = amenities;
    }

    @DynamoDBAttribute(attributeName = "name")

    public String getName() {
        return name;
    }

    @DynamoDBAttribute(attributeName = "address")
    public String getAddress() {
        return address;
    }

    @DynamoDBAttribute(attributeName = "phoneString")
    public String getPhoneString() {
        return phoneString;
    }

    @DynamoDBAttribute(attributeName = "photo")
    public String getPhoto() {
        return photo;
    }

    @DynamoDBAttribute(attributeName = "rating")
    public int getRating() {
        return rating;
    }

    @DynamoDBAttribute(attributeName = "reviews")
    @DynamoDBTyped(DynamoDBMapperFieldModel.DynamoDBAttributeType.L)
    public List<Review> getReviews() {
        return reviews;
    }

    @DynamoDBAttribute(attributeName = "subleases")
    @DynamoDBTyped(DynamoDBMapperFieldModel.DynamoDBAttributeType.L)
    public List<Sublease> getSubleases() {
        return subleases;
    }

    @DynamoDBAttribute(attributeName = "amenities")
    @DynamoDBTyped(DynamoDBMapperFieldModel.DynamoDBAttributeType.M)
    public Amenities getAmenities() {
        return amenities;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public void setAmenities(Amenities amenities) {
        this.amenities = amenities;
    }

    public void setPhoneString(String phoneString) {
        this.phoneString = phoneString;
    }

    public void setPhoto(String photo) {
        this.photo = photo;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    public void setReviews(List<Review> reviews) {
        this.reviews = reviews;
    }

    public void setSubleases(List<Sublease> subleases) {
        this.subleases = subleases;
    }


    

    /*
     * sets the rating of the apartment based on the average of all the reviews
     */
    public void setRating() {
        this.rating = reviews.size() == 0 ? 0 : reviews.stream().mapToInt(Review::getRating).sum() / reviews.size();
    }

    /*
     * adds a review to the apartment reviews list
     */
     
    public void addReview(Review newReview) {
        this.reviews.add(newReview);
    }

    /*
     * adds a sublease posting to the apartment subleases list
     */
    public void addSublease(Sublease newSublease) {
        this.subleases.add(newSublease);
    }


}
