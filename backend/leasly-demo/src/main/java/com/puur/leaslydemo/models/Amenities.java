package com.puur.leaslydemo.models;

public class Amenities {
    private boolean hasPool;
    private boolean hasGym;
    private boolean hasShuttleRoute;
    private boolean hasLaundry;
    private boolean hasPets;
    private boolean hasFurnishedRoom;
    private boolean hasIndvLeases;

    public Amenities() {

    }

    public Amenities(boolean hasPool, boolean hasGym, boolean hasShuttleRoute, boolean hasLaundry, boolean hasPets, boolean hasFurnishedRoom, boolean hasIndvLeases) {
        this.hasPool = hasPool;
        this.hasGym = hasGym;
        this.hasShuttleRoute = hasShuttleRoute;
        this.hasLaundry = hasLaundry;
        this.hasPets = hasPets;
        this.hasFurnishedRoom = hasFurnishedRoom;
        this.hasIndvLeases = hasIndvLeases;
    }

    public boolean getHasPool() {
        return hasPool;
    }

    public boolean getHasGym() {
        return hasGym;
    }

    public boolean getHasShuttleRoute() {
        return hasShuttleRoute;
    }

    public boolean getHasLaundry() {
        return hasLaundry;
    }

    public boolean getHasPets() {
        return hasPets;
    }

    public boolean getHasFurnishedRoom() {
        return hasFurnishedRoom;
    }

    public boolean getHasIndvLeases() {
        return hasIndvLeases;
    }

    public void setHasPool(boolean hasPool) {
        this.hasPool = hasPool;
    }

    public void setHasGym(boolean hasGym) {
        this.hasGym = hasGym;
    }

    public void setHasShuttleRoute(boolean hasShuttleRoute) {
        this.hasShuttleRoute = hasShuttleRoute;
    }

    public void setHasLaundry(boolean hasLaundry) {
        this.hasLaundry = hasLaundry;
    }

    public void setHasPets(boolean hasPets) {
        this.hasPets = hasPets;
    }

    public void setHasFurnishedRoom(boolean hasFurnishedRoom) {
        this.hasFurnishedRoom = hasFurnishedRoom;
    }

    public void setHasIndvLeases(boolean hasIndvLeases) {
        this.hasIndvLeases = hasIndvLeases;
    }
    
}
