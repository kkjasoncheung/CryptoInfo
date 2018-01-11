import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
