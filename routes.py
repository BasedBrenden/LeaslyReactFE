import sys 
import os
from data import storedListings
sys.dont_write_bytecode = True
from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

@app.route('/')
def home():
  return render_template('home.html', listings = storedListings.listings) 

@app.route('/listing')
def listing():
  return render_template('listing.html')

@app.route('/form')
def form():
  return render_template('newListForm.html')

@app.route('/create_listing', methods=['POST'])
def create_listing():
    beds = request.form['beds']
    baths = request.form['baths']
    sqft = request.form['sqft']
    location = request.form['location']
    rent = request.form['rent']
    description = request.form['description']
    image_file = request.files['image']
    image_filename = image_file.filename
    image_path =os.path.join('static/img', image_filename)
    image_file.save(image_path)
    storedListings.listings.append({"beds":beds,"baths":baths,"sqft":sqft,"location":location,"description":description,"rent":rent,"imageName":image_filename})
    return render_template('listing.html', beds=beds, baths=baths, sqft=sqft, location=location, rent=rent, description=description, filename=image_filename)




if __name__ == '__main__':
  app.run(debug=True)
