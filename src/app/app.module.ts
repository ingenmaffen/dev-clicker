import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DevelopPanelComponent } from './components/develop-panel/develop-panel.component';
import { SellPanelComponent } from './components/sell-panel/sell-panel.component';
import { ResourcePanelComponent } from './components/resource-panel/resource-panel.component';
import { PriceChartComponent } from './components/sell-panel/price-chart/price-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DevelopPanelComponent,
    SellPanelComponent,
    ResourcePanelComponent,
    PriceChartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
