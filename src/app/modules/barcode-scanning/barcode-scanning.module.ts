import { NgModule } from "@angular/core";

import { BarcodeScanningRoutingModule } from "./barcode-scanning-routing.module";

import { SharedTestingModule } from "@tests/modules";
import { BarcodeScanningModalComponent } from "./barcode-scanning-modal/barcode-scanning-modal.component";
import { BarcodeScanningPage } from "./barcode-scanning.page";
import { MatSliderModule } from "@angular/material/slider";

@NgModule({
	imports: [SharedTestingModule, BarcodeScanningRoutingModule, MatSliderModule],
	declarations: [BarcodeScanningPage, BarcodeScanningModalComponent],
})
export class BarcodeScanningModule {}
