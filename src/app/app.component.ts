import { Component, OnInit } from '@angular/core';
import { UserService } from "./core/services/user.service";
import { CookieService } from 'ngx-cookie-service';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError, RoutesRecognized, RouteConfigLoadStart, RouteConfigLoadEnd } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Well-being Times';
  showCarousel: boolean = false;
  public slides = [
    { src: "https://source.unsplash.com/collection/9990991"},
    { src: "https://source.unsplash.com/collection/9990991"},
    { src: "https://source.unsplash.com/collection/9990991"},
    { src: "https://source.unsplash.com/collection/9990991"}
  ]

  private cookieValue: string;
  private cookieIndicator: boolean;
  constructor(private userService: UserService, private router: Router, private cookieService: CookieService) {

    
    router.events.subscribe( (event: Event) =>  {

      if (event instanceof NavigationStart) {
          // Navigation started.
        console.log(event.url);
      }
      else if (event instanceof RoutesRecognized) { 
            // Router parses the URL and the routes are recognized.
        }
        else if (event instanceof RouteConfigLoadStart) {
          // Before the Router lazyloads a route configuration.
        }
        else if (event instanceof RouteConfigLoadEnd) { 
          // Route has been lazy loaded.
        }
        else if (event instanceof NavigationEnd) {
            // Navigation Ended Successfully.
            console.log(event.url);
            this.cookieValue = this.cookieService.get('_docereeContext');
            console.log('cookie Value: ', this.cookieValue);
            if(this.cookieValue === '') {
              this.cookieIndicator = false;
            } else {
              this.cookieIndicator = true;
            }
        }
        else if (event instanceof NavigationError) {
            // Navigation fails due to an unexpected error.
              console.log(event.error);
        }

    });

  }

   ngOnInit() {

  }
  
  clearDocereeCookies() {
    const body = <HTMLDivElement> document.body;
    const el = document.createElement('script');
    el.innerText = "docereeLogOut();"
    body.appendChild(el);
    console.log('clearing docereeContext');
    window.location.reload();
  }
}
