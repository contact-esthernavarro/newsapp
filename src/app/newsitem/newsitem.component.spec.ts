import { async, ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';
import { NewsitemComponent } from './newsitem.component';

// Http testing module and mocking controller
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

//service with http calls
import { ApiService } from '../api.service';

describe('NewsitemComponent', () => {
  let component: NewsitemComponent;
  let fixture: ComponentFixture<NewsitemComponent>;

  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  let injector: TestBed;
  let service: ApiService;
  let httpMock: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsitemComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [ApiService]
    })
    .compileComponents();

    // Inject the http service and test controller for each test

    injector = getTestBed();
    // httpClient = TestBed.get(HttpClient);
    // httpTestingController = TestBed.get(HttpTestingController);
    service = injector.get(ApiService);
    httpMock = injector.get(HttpTestingController);
  })); 

//   beforeEach(() => {
//     fixture = TestBed.createComponent(NewsitemComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

  it('should create', () => {
    fixture = TestBed.createComponent(NewsitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });


});
