import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
    exports: [
        MatIconModule,
        MatButtonModule,
        MatInputModule,
        MatCardModule,
        MatMenuModule,
        MatSelectModule,
        MatExpansionModule,
        MatProgressSpinnerModule
    ]
})

export class MaterialModule { }
