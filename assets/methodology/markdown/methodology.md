# How is your carbon footprint calculated?

It's important to say that there is no perfect calculation method because there are too many parameters to take into account, such as the weather which can drastically influence plane fuel consumption and some parameters that we can't predict, like the lifespan of a car for example.

However, what is important is the order of magnitude in order to compare and reduce our carbon footprint. Alls coefficients used are from [Ducky](https://static.ducky.eco/calculator_documentation.pdf) and [Ademe](https://www.bilans-ges.ademe.fr/).

## Transport

Very simple, knowing the amount of kilometres you have travelled, you simply multiply it by the coefficient of your vehicle. For example, fossil fuelled cars coefficient is 257 gCO2/eq per km which means that you emit around 2,6 kg of CO2 every 10 kilometres.

### For planes

Knowing the length of the flight allow us to know what kind of flight you had: small, medium or long haul. Knowing the average speed on these flights we deduct the distance and therefore the emission by multiplying by the corresponding coefficient.

## Food

We simply multiply the weight by the corresponding food ingredient coefficient.

## Electricity

We know thanks to [Electricity map](https://www.electricitymap.org/map) the carbon intensity of electricity of your country. Since we know how much watt hour you have consumed, you do a simple multiplication with your local carbon intensity to know your electricity emission.

## Streaming

This is tricky. We use an improved version of the 1-byte model made by [The Shift Project](https://theshiftproject.org/).

Knowing the duration and the type of streaming service you have consumed (high definition film, music…) we deduct the quantity of data (dataWeight) you have downloaded on your device.

The total amount of CO2 emitted is the following :

**GHGdataCenter + GHGnetwork + GHGdevice**

And these elements are defined in these terms :

**GHGdataCenter** = dataWeight _x_ FactorDataCenter _x_ electricity.world;

**GHGnetwork** = dataWeight _x_ FactorNetwork _x_ electricity.world;

**GHGdevice** = duration _x_ FactorDevice _x_ electricity[carbonElectricityIntensity];

_GHG : greenhouse gases_
