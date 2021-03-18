import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { GithubApiService } from '../../service/github-api/github-api.service';
import { LoaderService } from '../../service/loader/loader-service';
import { RepositorySearchResult, Repository } from '../../model/repository';

@Component({
  selector: 'repository-search',
  templateUrl: './repository-search.component.html',
})
export class RepositorySearchComponent implements OnInit, OnDestroy {
  public subHeading = 'Pesquise os respositorios mais interessantes do GITHUB';
  public searchControl: FormControl = new FormControl();
  public repositoryList: Repository[] = [];
  public searchSubmitted = false;
  public searchName = '';
  public error: string;

  private _subscription: any;

  constructor(
    private _githubApiService: GithubApiService,
    private _loaderService: LoaderService,
    private _route: ActivatedRoute) { }

  ngOnInit() {
    this._subscription = this._route.params.subscribe(params => {
      this.searchName = params.searchName || '';

      if (this.searchName && this.searchName.length > 0) {
        this._search();
      }
    });
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }

  onSubmit(): void {
    if (!this.searchControl.value || this.searchControl.value.trim() === '') {
      return;
    }

    this.searchName = this.searchControl.value;
    this._search();
  }

  private _search(): void {
    this._loaderService.setVisiblility(true);
    this._githubApiService.searchRepositoriesByName(this.searchName)
      .subscribe(
        (data: RepositorySearchResult) => {
          this._loaderService.setVisiblility(false);
          this.searchSubmitted = true;
          const { total_count: totalCount, items } = data;

          if (totalCount > 0) {
            this.repositoryList = items;
          } else {
            this.repositoryList = [];
            this.error = 'Sem resposta, tenta procurar com nome diferente';
          }
        },
        (err: HttpErrorResponse) => {
          this._loaderService.setVisiblility(false);
          this.searchSubmitted = true;
          this.error = err.statusText;
        }
      );
  }
}
