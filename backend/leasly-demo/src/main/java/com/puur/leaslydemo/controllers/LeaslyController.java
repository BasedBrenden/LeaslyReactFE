package com.puur.leaslydemo.controllers;

import java.util.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.puur.leaslydemo.models.Apartments;
import com.puur.leaslydemo.models.Review;
import com.puur.leaslydemo.models.Sublease;
import com.puur.leaslydemo.repositories.ApartmentsRepository;
@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api")
public class LeaslyController {

    public Apartments getApartmentsByName(String id) {
        for (Apartments apartment : apartmentsRepository.findAll()) {
            if (apartment.getName().equals(id)) {
                return apartment;
            }
        }
        return apartmentsRepository.findAll().get(1);
    }

    @Autowired
    private ApartmentsRepository apartmentsRepository;

    @GetMapping(path = "/apartments")
    public List<Apartments> list() {
        return apartmentsRepository.findAll();
    }

    @GetMapping(path = "/apartments/{id}")
    public Apartments getApartmentsByNameCall(@PathVariable String id) {
        return getApartmentsByName(id);
    }
    
    @GetMapping(path = "/userReviews/{id}")
    public List<Review> getReviewsByName(@PathVariable String id) {
        List<Review> reviews = new ArrayList<>();
        for(Apartments apartment: apartmentsRepository.findAll()) {
            for(Review review: apartment.getReviews()) {
                if(review.getUserId().equals(id)) {
                    reviews.add(review);
                }
            }
        }
        return reviews;
    }

    @GetMapping(path = "/userSubleases/{id}")
    public List<Sublease> getSubleasesByName(@PathVariable String id) {
        List<Sublease> subleases = new ArrayList<>();
        for(Apartments apartment: apartmentsRepository.findAll()) {
            for(Sublease sublease: apartment.getSubleases()) {
                if(sublease.getLeaserId().equals(id)) {
                    subleases.add(sublease);
                }
            }
        }
        return subleases;
    }
    
    @GetMapping(path = "/sortedSubleases")
    public List<Sublease> getSortedSubleases() {
        List<Sublease> subleases = new ArrayList<>();
        for(Apartments apartment: apartmentsRepository.findAll()) {
            for(Sublease sublease: apartment.getSubleases()) {
                    subleases.add(sublease);
            }
        }
        Collections.sort(subleases, new Comparator<Sublease>() {
            @Override
            public int compare(Sublease sub1, Sublease sub2) {
                return sub1.getStartDate().compareTo(sub2.getStartDate());
            }
        });
        return subleases;
    }

    @RequestMapping(value = "/reviews/{id}", method = RequestMethod.PUT)
    public void updateReviews(@PathVariable String id, @RequestBody Review review) {
        Apartments existingRepo = getApartmentsByName(id);
        List<Review> newReviewList = existingRepo.getReviews();
        newReviewList.add(review);
        existingRepo.setReviews(newReviewList);
        apartmentsRepository.save(existingRepo);
    }
    
    @RequestMapping(value = "/subleases/{id}", method = RequestMethod.PUT)
    public void updateSubleases(@PathVariable String id, @RequestBody Sublease sublease) {
        Apartments existingRepo = getApartmentsByName(id);
        List<Sublease> newSubleaseList = existingRepo.getSubleases();
        newSubleaseList.add(sublease);
        existingRepo.setSubleases(newSubleaseList);
        apartmentsRepository.save(existingRepo);
    }
    

}

