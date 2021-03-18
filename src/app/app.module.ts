import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

import { AppComponent } from './app.component';
import { AppRoutes } from './app-routing.module';
import { ChartComponent } from './components/repository-chart/chart/chart.component';
import { GithubApiService } from './service/github-api/github-api.service';
import { IssueListComponent } from './components/repository-issues/issue-list/issue-list.component';
import { LoaderComponent } from './components/loader/loader.component';
import { LoaderService } from './service/loader/loader-service';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RepositoryChartComponent } from './components/repository-chart/repository-chart.component';
import { RepositoryIssuesComponent } from './components/repository-issues/repository-issues.component';
import { RepositorySearchComponent } from './components/repository-search/repository-search.component';
import { SearchListComponent } from './components/repository-search/search-list/search-list.component';
import { SubHeaderComponent } from './components/sub-header/sub-header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    AppRoutes,
    BrowserModule,
    ChartsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule
  ],
  declarations: [
    AppComponent,
    ChartComponent,
    IssueListComponent,
    LoaderComponent,
    PageNotFoundComponent,
    RepositoryIssuesComponent,
    RepositorySearchComponent,
    SearchListComponent,
    RepositoryIssuesComponent,
    RepositoryChartComponent,
    SubHeaderComponent,
  ],
  providers: [
    GithubApiService,
    LoaderService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
