let peterHouseWide = 8;
let peterHouseDeep = 10;
let peterHouseHigh = 10;
let peterHouseVolumeInMeter = (peterHouseWide * peterHouseDeep * peterHouseHigh);
let peterGardenSizeInM2 = 100;
let peterHousePrice = 2500000
let peterShouldHousePrice = (peterHouseVolumeInMeter*2.5*1000+peterGardenSizeInM2*300);

let juliaHouseWide = 5;
let juliaHouseDeep = 11;
let juliaHouseHigh = 8;
let juliaHouseVolumeInMeter = (juliaHouseWide * juliaHouseDeep * juliaHouseHigh);
let juliaGardenSizeInM2 = 70;
let juliaHousePrice = 1000000;
let juliaShouldHousePrice = (juliaHouseVolumeInMeter*2.5*1000+juliaGardenSizeInM2*300);

console.log('Housey pricey (A house price estimator)' + '\n');
console.log("Peter's house costs 2 500 000 but the right price should be " + (peterHouseVolumeInMeter*2.5*1000+peterGardenSizeInM2*300) + "." );
if( peterHousePrice > peterShouldHousePrice ){
    console.log("Peter is paying too much.");
}else{
    console.log("Peter is paying too little.");
};
console.log("Julia's house costs 1 000 000 but the right price should be " + (juliaHouseVolumeInMeter*2.5*1000+juliaGardenSizeInM2*300) + ".");
if( juliaHousePrice > juliaShouldHousePrice ){
    console.log("Julia is paying too much." + "\n");
}else{
    console.log("Julia is paying too little." + "\n");
};
