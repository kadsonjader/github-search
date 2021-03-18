import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoaderComponent } from './loader/loader.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RepositoryChartComponent } from './repository-chart/repository-chart.component';
import { RepositoryIssuesComponent } from './repository-issues/repository-issues.component';
import { RepositorySearchComponent } from './repository-search/repository-search.component';
import { ChartComponent } from './chart/chart.component';
import { IssueListComponent } from './issue-list/issue-list.component';
import { SearchListComponent } from './search-list/search-list.component';
import { SubHeaderComponent } from './sub-header/sub-header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    PageNotFoundComponent,
    RepositoryChartComponent,
    RepositoryIssuesComponent,
    RepositorySearchComponent,
    ChartComponent,
    IssueListComponent,
    SearchListComponent,
    SubHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
