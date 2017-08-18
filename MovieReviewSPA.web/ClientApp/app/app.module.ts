import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { sharedConfig } from './app.module.shared';
import { MoviesComponent } from './components/movies/movies.component';
import { MoviesService } from './services/movies.service';
import { ReviewsService } from './services/reviews.service';
import { NewMovieComponent } from './components/new-movie/new-movie.component';
import { EditMovieComponent } from './components/edit-movie/edit-movie.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ReviewsComponent } from './components/reviews/reviews.component';


@NgModule({
    bootstrap: sharedConfig.bootstrap,
    declarations: [...sharedConfig.declarations, MoviesComponent, NewMovieComponent, EditMovieComponent, NotFoundComponent, ReviewsComponent],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ...sharedConfig.imports
    ],
    providers: [
        { provide: 'ORIGIN_URL', useValue: location.origin },
        MoviesService,
        ReviewsService
    ]
})
export class AppModule {
}
