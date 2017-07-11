import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AccordionModule,
  ButtonModule,
  CheckboxModule,
  CodeHighlighterModule,
  ContextMenuModule,
  DataTableModule,
  DialogModule,
  DropdownModule,
  FieldsetModule,
  InputTextModule,
  MultiSelectModule,
  OverlayPanelModule,
  PanelModule,
  SharedModule,
  SliderModule,
  TabMenuModule
 } from 'primeng/primeng';

import { AppComponent } from './app.component';
import { CarousingComponent } from './carousing/carousing.component';
import { CombatComponent } from './combat/combat.component';
import { ForceComponent } from './force/force.component';
import { GadgetsComponent } from './gadgets/gadgets.component';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';
import { MagicalItemComponent } from './magical-items/magical-item.component';
import { MonsterComponent } from './monster/monster.component';
import { MonsterManualComponent } from './monster-manual/monster-manual.component';
import { MonsterOverlayComponent } from './monster-overlay/monster-overlay.component';

import { CapitalizePipe } from './pipes/capitalize.pipe';
import { CommaSplitPipe } from './pipes/comma-split.pipe';
import { MarkdownPipe } from './pipes/markdown.pipe';
import { NonePipe } from './pipes/none.pipe';

import { ForceService } from './force/force.service';
import { GadgetsService } from './gadgets/gadgets.service';
import { MapService } from './map/map.service';
import { MagicalItemService } from './magical-items/magical-item.service';
import { MonsterManualService } from './monster-manual/monster-manual.service';

@NgModule({
  declarations: [
    AppComponent,
    CarousingComponent,
    CombatComponent,
    ForceComponent,
    GadgetsComponent,
    HomeComponent,
    MapComponent,
    MagicalItemComponent,
    MonsterComponent,
    MonsterManualComponent,
    MonsterOverlayComponent,
    CapitalizePipe,
    CommaSplitPipe,
    MarkdownPipe,
    NonePipe
  ],
  imports: [
    AccordionModule,
    ButtonModule,
    BrowserAnimationsModule,
    BrowserModule,
    CheckboxModule,
    CodeHighlighterModule,
    ContextMenuModule,
    CommonModule,
    DataTableModule,
    DialogModule,
    DropdownModule,
    FieldsetModule,
    FormsModule,
    HttpModule,
    InputTextModule,
    MultiSelectModule,
    OverlayPanelModule,
    PanelModule,
    SharedModule,
    SliderModule,
    TabMenuModule,
    RouterModule.forRoot([{
      path: 'carousing',
      component: CarousingComponent
    }, {
      path: 'combat',
      component: CombatComponent
    }, {
      path: 'home',
      component: HomeComponent
    }, {
      path: 'force',
      component: ForceComponent
    }, {
      path: 'gadgets',
      component: GadgetsComponent
    },  {
      path: 'magical-items',
      component: MagicalItemComponent
    }, {
      path: 'map',
      component: MapComponent
    }, {
      path: 'monster-manual',
      component: MonsterManualComponent
    }, {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    }])
  ],
  providers: [
    ForceService,
    GadgetsService,
    MapService,
    MagicalItemService,
    MonsterManualService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
