import { ColorDirective } from './color.directive';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {Component} from '@angular/core';
import {By} from '@angular/platform-browser';

@Component({
  template: `
    <p appColor="yellow">text1</p>
    <p appColor>text2</p>
  `
})
class HostComponent {}

describe('ColorDirective', () => {
  // Создаем fixture типа ComponentFixture по типу HostComponent
  let fixture: ComponentFixture<HostComponent>;
  // Создаем шаблон и настраиваем модуль
  beforeEach( () => {
    TestBed.configureTestingModule({
      declarations: [ColorDirective, HostComponent]
    });
    fixture = TestBed.createComponent(HostComponent);
    fixture.detectChanges();
  });
  it('should create an instance', () => {
    const directive = new ColorDirective(null);
    expect(directive).toBeTruthy();
  });
  it('should apply input color', () => {
    const debugElement = fixture.debugElement.queryAll(By.css('p'))[0];
    expect(debugElement.nativeElement.style.backgroundColor).toBe('yellow');
  });
  it('should apply default color', () => {
    const debugElement = fixture.debugElement.queryAll(By.css('p'))[1];

    const directive = debugElement.injector.get(ColorDirective);
    expect(debugElement.nativeElement.style.backgroundColor).toBe(directive.defaultColor);
  });
});
