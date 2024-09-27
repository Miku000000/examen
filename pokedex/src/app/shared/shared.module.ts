import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './ui/header/header.component';
import { NgIconsModule } from '@ng-icons/core';
import { heroUsers 
  , heroHome
  , heroAcademicCap
  , heroArchiveBox
} from '@ng-icons/heroicons/outline';
@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    NgIconsModule.withIcons({ heroUsers
      , heroAcademicCap
      , heroArchiveBox
      , heroHome  })
  ],
  exports: [
    HeaderComponent,
    NgIconsModule,
  ]
})
export class SharedModule { }
