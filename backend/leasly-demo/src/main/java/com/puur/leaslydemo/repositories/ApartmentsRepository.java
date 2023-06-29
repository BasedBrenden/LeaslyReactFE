package com.puur.leaslydemo.repositories;


import com.puur.leaslydemo.models.Apartments;
import org.socialsignin.spring.data.dynamodb.repository.EnableScan;
import org.springframework.data.repository.CrudRepository;
import java.util.List;

@EnableScan
public interface ApartmentsRepository extends CrudRepository<Apartments, List<Apartments>>{
   List<Apartments> findAll();
    
}