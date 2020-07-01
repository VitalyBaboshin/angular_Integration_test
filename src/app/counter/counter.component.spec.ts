import {CounterComponent} from './counter.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterComponent]
    });
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    // fixture.debugElement;
    // fixture.nativeElement;
  });
  it('should be created', () => {
    /* Если что то есть то компонент был успешно создан */
    expect(component).toBeDefined();
  });
  it('should render counter property', () => {
    const num = 42;
    component.counter = num;
    fixture.detectChanges();

    const de = fixture.debugElement.query(By.css('.counter'));
    const el: HTMLElement = de.nativeElement;

    expect(el.textContent).toContain(num.toString());
  });
  it('should add green class if counter is even', () => {
    component.counter = 6;
    fixture.detectChanges();
    const de = fixture.debugElement.query(By.css('.counter'));
    const el: HTMLElement = de.nativeElement;

    expect(el.classList.contains('green')).toBeTruthy();
  });
  it('should increment counter if increment button was clicked', () => {
    const btn = fixture.debugElement.query(By.css('#increment'));
    btn.triggerEventHandler('click', null);
    expect(component.counter).toBe(1);
  });
  it('should decrement counter if decrement button was clicked', () => {
    const btn = fixture.debugElement.query(By.css('#decrement'));
    btn.triggerEventHandler('click', null);
    expect(component.counter).toBe(-1);
  });

});
