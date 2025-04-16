import { Component, inject } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { StageService } from '../../services/stage.service';
import { Stage } from '../../models/stage.model';

@Component({
  selector: 'app-stage-details-iheb',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stage-details-iheb.component.html',
})
export class StageDetailsIhebComponent {
  private route = inject(ActivatedRoute);
  private stageService = inject(StageService);
  private location = inject(Location);

  stage?: Stage;

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.stageService
      .getStageById(id!)
      .subscribe((stage) => (this.stage = stage));
  }

  retour(): void {
    this.location.back();
  }
}
