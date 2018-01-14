import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { BitcoinDataService } from './bitcoin-data.service';
import { EthereumDataService } from './ethereum-data.service';
import { LitecoinDataService } from './litecoin-data.service';
import { AppComponent } from './app.component';
import { BitcoinComponent } from './bitcoin/bitcoin.component';
import { EthereumComponent } from './ethereum/ethereum.component';
import { LitecoinComponent } from './litecoin/litecoin.component';


@NgModule({
  declarations: [
    AppComponent,
    BitcoinComponent,
    EthereumComponent,
    LitecoinComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
        path: 'bitcoin',
        component: BitcoinComponent
      },
      {
        path: 'ethereum',
        component: EthereumComponent
      },
      {
        path: 'litecoin',
        component: LitecoinComponent
      }
    ])
  ],
  providers: [BitcoinDataService, EthereumDataService, LitecoinDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
