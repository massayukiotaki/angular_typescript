import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cadastro-aluno',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cadastro-aluno.component.html',
  styleUrl: './cadastro-aluno.component.css'
})
export class CadastroAlunoComponent {

  aluno: any = {};
  alunos: any[] = [];
  cadastrarAluno() {
    if (this.validarAluno(this.aluno)) {
      this.alunos.push(this.aluno);
      console.log('Aluno cadastrado com sucesso:', this.aluno);
      this.aluno = {};
    } else {
      console.error('Erro no cadastro do aluno. Preencha todos os campos.');
    }
  }

  validarAluno(aluno: any): boolean {
    return aluno.ra && aluno.nome && aluno.email && aluno.celular;
  }
}

