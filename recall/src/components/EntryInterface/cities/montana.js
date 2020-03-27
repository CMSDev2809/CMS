import React, { Component } from "react";

const cities = `Billings
Missoula
Great Falls
Bozeman
Butte
Helena
Kalispell
Havre
Anaconda
Miles City
Belgrade
Livingston
Laurel
Whitefish
Lewistown
Sidney
Glendive
Columbia Falls
Polson	Lake
Hamilton
Dillon
Hardin
Shelby
Glasgow	Valley
Deer Lodge
Cut Bank
Libby
Wolf Point
Conrad
Colstrip
Red Lodge
Malta	Phillips
Columbus
Townsend
Ronan
Three Forks
Stevensville
Roundup
Forsyth
Baker
Plentywood
Choteau
Big Timber
Manhattan	Gallatin
Fort Benton
Thompson Falls
West Yellowstone
Chinook
Boulder
Plains
Whitehall
Eureka
Scobey
Browning
Harlowton
White Sulphur Springs
Troy
Pinesdale
Chester
St. Ignatius
Fairview
Ennis
Philipsburg
Superior
Poplar
Harlem
Darby
Culbertson
Bridger
Fairfield
Cascade
Walkerville
Sheridan
Circle
Terry	Prairie
Big Sandy
Belt
Joliet
Wibaux
Hot Springs
Geyser
Valier
Broadus
Fromberg
Lodge Grass
Alberton
Stanford
Sunburst
Twin Bridges
Jordan
Ekalaka
Dutton
Hysham
Drummond
Nashua
Clyde Park
Geraldine
Brockton
Denton
Ryegate
Fort Peck
Medicine Lake
Lima
Hobson
Bainville
Winifred
Saco
Moore
Broadview
Virginia City
Lavina
Froid
Winnett
Richey
Westby
Plevna
Kevin
Judith Gap
Dodson
Hingham
Grass Range
Rexford
Melstone
Opheim
Bearcreek
Flaxville
Neihart
Outlook
Ismay`;

const fn = () => {
  let newCities = cities.split("\n");
  newCities = newCities.sort();
  return newCities;
};

export default fn().map(el => <option value={el}>{el}</option>);
