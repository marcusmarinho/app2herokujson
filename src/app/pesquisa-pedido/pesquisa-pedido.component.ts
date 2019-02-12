import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '../../../node_modules/@angular/forms';
import { Pedido } from '../shared/pedido.model'
import { OfertasService } from '../ofertas.service'

@Component({
  selector: 'app-pesquisa-pedido',
  templateUrl: './pesquisa-pedido.component.html',
  styleUrls: ['./pesquisa-pedido.component.css'],
  providers: [OfertasService]
})
export class PesquisaPedidoComponent implements OnInit {

  public consultaFormulario: FormGroup = new FormGroup({
    'numeroDoPedido': new FormControl(null, [Validators.required,Validators.minLength(1),Validators.maxLength(6)]),
    'endereco': new FormControl({value:'', disabled: true}),
    'complemento': new FormControl({value: '', disabled: true}),
    'numero': new FormControl({value: '', disabled: true}),
    'formaDePagamento': new FormControl({value: '', disabled: true})
  })

  public controle: boolean 

  public controleValor: boolean 

  public pedido: Pedido

  public msgErro: string = "Numero do Pedido não indentificado"

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
    this.controle = true
    this.controleValor = false
    this.pedido = new Pedido("", "", "", "", [])
  }

  public efetuaConsulta() {
    if (this.consultaFormulario.status === 'INVALID') {
      this.consultaFormulario.get('numeroDoPedido').markAsTouched()
    }
    else {
      this.ofertasService.consultaPedido(this.consultaFormulario.value.numeroDoPedido).subscribe(res => {
      
        if (res == undefined){
          this.eraseForm()
          this.controle = false
          this.controleValor = false
          throw('Numero do Pedido não indentificado')   
        }
        this.pedido = res
        this.controle = true
        this.controleValor = true
        this.consultaFormulario.patchValue({
          endereco: this.pedido.endereco,
          complemento: this.pedido.complemento,
          numero: this.pedido.numero,
          formaDePagamento: this.pedido.formaPagamento
        })
      })
    }
  }

  public totalPedido(): number {
    let [...itensPedido] = this.pedido.itens
    let resultado: number = 0

    itensPedido.forEach(val => {
      resultado += val.quantidade * val.valor
    })
    return resultado
  }

  public eraseForm(): void {
    this.consultaFormulario.patchValue({
      endereco: '',
      complemento: '',
      numero: '',
      formaDePagamento: ''
    })
  }
}