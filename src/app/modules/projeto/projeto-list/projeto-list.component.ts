import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-projeto-list',
  templateUrl: './projeto-list.component.html',
  styleUrls: ['./projeto-list.component.scss']
})
export class ProjetoListComponent implements OnInit {
  dataInicio: Date | null = null;
  dataFim: Date | null = null;


  constructor(
    private _router: Router,
  ){

  }

  totais = {
    totalcabecas: 150,
    totalboicastrado: 50,
    totalboiinteiro: 30,
    totalmarruco: 40,
    totalvaca: 30,
  };

  displayedColumns: string[] = ['codigo', 'data', 'nome', 'cpf', 'cidade', 'qtdCabecas', 'acoes'];
  projetoDataSource = new MatTableDataSource<any>([]);

  total = 3;
  limit = 10;
  page = 1;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    // Mockando alguns dados
    const escalasMock = [
      {
        id: 1,
        codigo: 'PRJ-001',
        dataEscala: new Date(),
        nome: 'Projeto Alfa',
        cpf: '123.456.789-00',
        municipio: { nome: 'Goiânia', uf: 'GO' },
        qtdCabecas: 20
      },
      {
        id: 2,
        codigo: 'PRJ-002',
        dataEscala: new Date(),
        nome: 'Projeto Beta',
        cpf: '987.654.321-00',
        municipio: { nome: 'Anápolis', uf: 'GO' },
        qtdCabecas: 50
      },
      {
        id: 3,
        codigo: 'PRJ-003',
        dataEscala: new Date(),
        nome: 'Projeto Gama',
        cpf: '111.222.333-44',
        municipio: { nome: 'Catalão', uf: 'GO' },
        qtdCabecas: 80
      }
    ];

    this.projetoDataSource.data = escalasMock;
  }

  onDataInicioChange(event: any): void {
    console.log('Data início:', event.value);
  }

  onDataFimChange(event: any): void {
    console.log('Data fim:', event.value);
  }

  filtrarProjetos(value: any){}

  filter(value: string): void {
    this.projetoDataSource.filter = value.trim().toLowerCase();
  }

  mudarPagina(event: any): void {
    console.log('Página:', event.pageIndex + 1);
    this.page = event.pageIndex + 1;
    this.limit = event.pageSize;
  }

  deletarProjeto(id: number): void {
    console.log('Excluir projeto com ID:', id);
    this.projetoDataSource.data = this.projetoDataSource.data.filter(proj => proj.id !== id);
  }
}
