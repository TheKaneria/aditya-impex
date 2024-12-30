import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About2 from "./pages/about-2";
import Contact2 from "./pages/contact-2";
import AgriPortfolio from "./pages/AgriPortfolio";
import Petertypeenginedetails from "./pages/Peter-type-engine-details";
import ListerDetails from "./pages/ListerDetails";
import PetterEngineSpareDetails from "./pages/PetterEngineSpareDetails";
import ListerEngineSpareDetails from "./pages/ListerEngineSpareDetails";
import TurbinWaterPumpsDetails from "./pages/TurbinWaterPumpsDetails";
import CentrifugalPumpDetails from "./pages/CentrifugalPumpDetails";
import SubmersiblePumpsDetails from "./pages/SubmersiblePumpsDetails";
import HandPumpDetails from "./pages/HandPumpDetails";
import ScutionHosePipeDetails from "./pages/ScutionHosePipeDetails";
import CpvcPipeDetails from "./pages/CpvcPipeDetails";
import PloughingDetailsPre from "./pages/PloughingDetailsPre";
import ChaffCutterDetails from "./pages/ChaffCutterDetails";
import ChoperMillDetails from "./pages/ChoperMillDetails";
import RoundBar from "./pages/RoundBar";
import HarvestingPortfolio from "./pages/HarvestingPortfolio";
import CultivatorDetails from "./pages/CultivatorDetails";
import PloughingDetails from "./pages/PloughingDetails";
import SeedDrillDetails from "./pages/SeedDrillDetails";
import SeedPlanterMachineDetails from "./pages/SeedPlanterMachineDetails";
import PostHarvestingPortfolio from "./pages/Post-Harvesting-Portfolio";
import DrippSystemDetails from "./pages/DrippSystemDetails";
import PolyDiscHarrow from "./pages/PolyDiscHarrow";
import HarvestingMachineRepare from "./pages/HarvestingMachineRepare";
import OtherHarvestingPortfolio from "./pages/Other-Harvesting-Portfolio";
import SeedCleaningMachine from "./pages/SeedCleaningMachine";
import DrumCleaner from "./pages/DrumCleaner";
import WheatCleaningMachine from "./pages/WheatCleaningMachine";
import FoodPortfolio from "./pages/Food-Portfolio";
import GriddingMillDetails from "./pages/GriddingMillDetails";
import PalmOilDetails from "./pages/PalmOilDetails";
import DaliaMakingDetails from "./pages/DaliaMakingDetails";
import CashewNutDetails from "./pages/CashewNutDetails";
import GrainColorDetails from "./pages/GrainColorDetails";
import RiceColorDetails from "./pages/RiceColorDetails";
import CornOilDetails from "./pages/CornOilDetails";
import VegFruitCuttingDetails from "./pages/VegFruitCuttingDetails";
import ConstructionPortfolio from "./pages/Construction-Portfolio";
import HydraulicDetails from "./pages/HydraulicDetails";
import TowerLiftDetails from "./pages/TowerLiftDetails";
import HopperMachine from "./pages/HopperMachineDetails";
import NonHopperMachine from "./pages/NonHopperMachineDetails";
import NeedleVibrator from "./pages/Needle-Vibrator-Details";
import PaverBlock from "./pages/PaverBlockDetails";
import SoilCompactor from "./pages/Soil-compactor-Details";
import AutomaticPlaster from "./pages/automatic-plaster-details";
import WorkshopPortfolio from "./pages/Workshop-Portfolio";
import AirCompressor from "./pages/air-compressor-details";
import LathMachine from "./pages/lath-machine-details";
import PortableWelding from "./pages/portable-welding-details";
import AllTypePowerTools from "./pages/all-type-power-tools-details";
import ElectricMotor from "./pages/electric-motor-details";
import DrillMachine from "./pages/drill-machine-details";
import ElectricCable from "./pages/electric-cable-details";
import ComponentPortfolio from "./pages/component-portfolio";
import SandCasting from "./pages/sand-casting-details";
import DIEForging from "./pages/die-forging-details";
import BarStock from "./pages/bar-stock-details";
import BearingDetails from "./pages/bearing-details";
import RenewablePortfolio from "./pages/renewable-portfolio";
import SolarHomeKit from "./pages/solarhomekit-details";
import SolarPump from "./pages/solar-pump-details";
import SolarSystem from "./pages/solar-system-details";
import SolarLantern from "./pages/solar-lantern-details";
import SolarStreetLight from "./pages/solar-street-light-details";
import TenderPortfolio from "./pages/tender-portfolio";
import PouchPowder from "./pages/pouch-powder-details";
import DalMillPlant from "./pages/dal-mill-plant-details";
import NonVovenBagPlant from "./pages/non-voven-bag-plant-details";
import SugerPlantMachinery from "./pages/suger-plant-machine-details";
import CupFilling from "./pages/cup-filling-details";
import WaterBottle from "./pages/water-bottle";
import TenderPortfolio2 from "./pages/tender-portfolio2";
import ColdPressOilDetails from "./pages/cold-press-oil-details";
import OilFilterDetails from "./pages/oil-filter-machine-details";
import GroundnutsOilMachine from "./pages/groundnuts-oil-machine";
import OilGhaniMachine from "./pages/oil-ghani-machine";
import MustardOilMill from "./pages/mustard-oil-mill-machine";
import ColdStorage from "./pages/cold-storage-details";
import Generator from "./pages/generator-details";
import CandleMakingMachine from "./pages/candle-making-details";
import Home from "./pages/Home";

class Router extends Component {
  render() {
    return (
      //<BrowserRouter>
      <BrowserRouter basename={""}>
        <div className="page-wraper">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/aboutus" component={About2} />
            <Route path="/Agriculture-Portfolio" component={AgriPortfolio} />
            <Route
              path="/peter-type-engine-details"
              component={Petertypeenginedetails}
            />

            <Route path="/lister-details" component={ListerDetails} />
            <Route
              path="/petter-engine-spare-details"
              component={PetterEngineSpareDetails}
            />
            <Route
              path="/lister-engine-spare-details"
              component={ListerEngineSpareDetails}
            />
            <Route
              path="/Turbin-Water-Pumps-Details"
              component={TurbinWaterPumpsDetails}
            />
            <Route
              path="/centrifugal-pump-details"
              component={CentrifugalPumpDetails}
            />
            <Route
              path="/Submersible-Pumps-Details"
              component={SubmersiblePumpsDetails}
            />
            <Route
              path="/suction-hose-pipe-details"
              component={ScutionHosePipeDetails}
            />
            <Route
              path="/ploughing-details-pre"
              component={PloughingDetailsPre}
            />
            <Route
              path="/chaff-cutter-details"
              component={ChaffCutterDetails}
            />
            <Route path="/choper-mill-details" component={ChoperMillDetails} />
            <Route path="/round-bar-details" component={RoundBar} />
            <Route path="/cpvc-pipe-details" component={CpvcPipeDetails} />

            <Route path="/hand-pump-details" component={HandPumpDetails} />
            <Route
              path="/harvesting-portfolio"
              component={HarvestingPortfolio}
            />
            <Route
              path="/post-harvesting-portfolio"
              component={PostHarvestingPortfolio}
            />
            <Route
              path="/other-harvesting-portfolio"
              component={OtherHarvestingPortfolio}
            />
            <Route path="/cultivator-details" component={CultivatorDetails} />
            <Route path="/ploughing-details" component={PloughingDetails} />
            <Route path="/seed-drill-details" component={SeedDrillDetails} />
            <Route
              path="/seed-planter-machine"
              component={SeedPlanterMachineDetails}
            />
            <Route
              path="/dripp-system-details"
              component={DrippSystemDetails}
            />
            <Route
              path="/poly-dics-harrow-details"
              component={PolyDiscHarrow}
            />
            <Route
              path="/harvesting-machine-repare-details"
              component={HarvestingMachineRepare}
            />

            <Route
              path="/seed-cleaning-machine-details"
              component={SeedCleaningMachine}
            />
            <Route path="/drum-cleaner-details" component={DrumCleaner} />
            <Route
              path="/wheat-cleaning-machine"
              component={WheatCleaningMachine}
            />

            <Route path="/food-portfolio" component={FoodPortfolio} />
            <Route
              path="/gridding-mill-details"
              component={GriddingMillDetails}
            />
            <Route path="/palm-oil-details" component={PalmOilDetails} />
            <Route
              path="/dalia-making-details"
              component={DaliaMakingDetails}
            />
            <Route
              path="/cashew-nut-machine-details"
              component={CashewNutDetails}
            />
            <Route path="/grain-color-details" component={GrainColorDetails} />
            <Route path="/rice-color-details" component={RiceColorDetails} />
            <Route path="/corn-oil-details" component={CornOilDetails} />
            <Route
              path="/vegFruit-cutting-details"
              component={VegFruitCuttingDetails}
            />

            <Route
              path="/construction-portfolio"
              component={ConstructionPortfolio}
            />
            <Route path="/hydraulic-details" component={HydraulicDetails} />
            <Route path="/tower-lift-details" component={TowerLiftDetails} />
            <Route path="/hopper-machine-details" component={HopperMachine} />
            <Route
              path="/non-hopper-machine-details"
              component={NonHopperMachine}
            />
            <Route path="/needle-vibrator-details" component={NeedleVibrator} />
            <Route path="/paver-block-details" component={PaverBlock} />
            <Route path="/soil-compactor-details" component={SoilCompactor} />
            <Route
              path="/automatic-plaster-details"
              component={AutomaticPlaster}
            />
            <Route path="/workshop-portfolio" component={WorkshopPortfolio} />
            <Route path="/air-compressor-details" component={AirCompressor} />
            <Route path="/lath-machine-details" component={LathMachine} />
            <Route
              path="/portable-welding-details"
              component={PortableWelding}
            />
            <Route
              path="/all-type-power-tools-details"
              component={AllTypePowerTools}
            />
            <Route path="/electric-motor-details" component={ElectricMotor} />
            <Route path="/drill-machine-details" component={DrillMachine} />
            <Route path="/electric-cable-details" component={ElectricCable} />

            <Route path="/component-portfolio" component={ComponentPortfolio} />
            <Route path="/sand-casting-details" component={SandCasting} />
            <Route path="/die-forging-details" component={DIEForging} />
            <Route path="/bar-stock-details" component={BarStock} />
            <Route path="/bearing-details" component={BearingDetails} />

            <Route path="/renewable-portfolio" component={RenewablePortfolio} />
            <Route path="/solarhomekit-details" component={SolarHomeKit} />
            <Route path="/solar-pump-details" component={SolarPump} />
            <Route path="/solar-system-details" component={SolarSystem} />
            <Route path="/solar-lantern-details" component={SolarLantern} />
            <Route
              path="/solar-street-light-details"
              component={SolarStreetLight}
            />

            <Route path="/tender-portfolio" component={TenderPortfolio} />
            <Route path="/pouch-powder-details" component={PouchPowder} />
            <Route path="/dal-mill-plant-details" component={DalMillPlant} />
            <Route
              path="/non-voven-bag-plant-details"
              component={NonVovenBagPlant}
            />
            <Route
              path="/suger-plant-machine-details"
              component={SugerPlantMachinery}
            />
            <Route path="/cup-filling-details" component={CupFilling} />
            <Route path="/water-bottle" component={WaterBottle} />
            <Route path="/tender-portfolio2" component={TenderPortfolio2} />
            <Route
              path="/cold-press-oil-details"
              component={ColdPressOilDetails}
            />
            <Route
              path="/oil-filter-machine-details"
              component={OilFilterDetails}
            />
            <Route
              path="/groundnuts-oil-machine"
              component={GroundnutsOilMachine}
            />
            <Route path="/oil-ghani-machine" component={OilGhaniMachine} />
            <Route
              path="/mustard-oil-mill-machine"
              component={MustardOilMill}
            />
            <Route path="/cold-storage-details" component={ColdStorage} />
            <Route path="/generator-details" component={Generator} />
            <Route
              path="/candle-making-details"
              component={CandleMakingMachine}
            />
            <Route path="/contactus" component={Contact2} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Router;
