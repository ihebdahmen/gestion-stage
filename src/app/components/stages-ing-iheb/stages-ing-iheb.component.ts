import { Component, inject, OnInit } from '@angular/core';
import { Stage } from '../../models/stage.model';
import { StageService } from '../../services/stage.service';
import { CommonModule, NgFor } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stages-ing-iheb',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './stages-ing-iheb.component.html',
})
export class StagesIngIhebComponent implements OnInit {
  stages: Stage[] = [];
  stageService = inject(StageService);
  private router = inject(Router);

  constructor() {}

  ngOnInit(): void {
    this.stageService.getStages().subscribe((stages) => {
      this.stages = stages;
    });
  }

  viewDetails(id: string): void {
    this.router.navigate(['/detail', id]);
  }

  deleteStage(id: string): void {
    this.stageService.deleteStage(id).subscribe(() => {
      this.stages = this.stages.filter((stage) => stage.id !== id);
    });
  }
}
