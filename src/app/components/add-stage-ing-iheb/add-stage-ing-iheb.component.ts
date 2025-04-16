import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { StageService } from '../../services/stage.service';
import { Stage } from '../../models/stage.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-stage-ing-iheb',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-stage-ing-iheb.component.html',
})
export class AddStageIngIhebComponent {
  stageForm;
  stageService = inject(StageService)

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.stageForm = this.fb.group({
      titre: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(3)]],
      entreprise: ['', [Validators.required, Validators.pattern(/^[A-Z]/)]],
      disponible: [true],
      nbrInteresse: [0],
    });
  }

  onSubmit(): void {
    if (this.stageForm.valid) {
      const formValue = this.stageForm.value;
      const stage: Stage = {
        titre: formValue.titre || '',
        description: formValue.description || '',
        entreprise: formValue.entreprise || '',
        disponible: formValue.disponible ?? true,
        nbrInteresse: formValue.nbrInteresse ?? 0,
      };

      this.stageService.addStage(stage).subscribe(() => {
        this.router.navigate(['/stages']);
      });
    }
  }
}
