# Boas-vindas ao repositório do Desafio!

# Orientações

<details>
<summary><strong>Antes de começar a desenvolver</strong></summary><br />

1. Clone o repositório

	*  Use o comando: `git clone https://github.com/MarcleyRosa/brain-code.git`

* Entre na pasta do repositório que você acabou de clonar:

	*  `cd brain-code`

2. Instale as dependências

	* Para isso, use o seguinte comando: `npm install`
	
</details>

<details>
<summary><strong>Abrindo um Pull Request</strong></summary><br />

1. Crie uma branch a partir da branch `master`

	* Verifique se você está na branch `master`
	  * Exemplo: `git branch`
	* Se não estiver, mude para a branch `master`
	  * Exemplo: `git checkout master`
	* Agora, crie uma branch para qual você vai submeter os `commits` do seu projeto:
		* Você deve criar uma branch no seguinte formato: `nome-de-usuario-nome-do-projeto`
		* Exemplo: `git checkout -b arthur-alves-brain-code`

2. Adicione as mudanças ao _stage_ do Git e faça um `commit`
	* Verifique que as mudanças ainda não estão no _stage_
	  * Exemplo: `git status` (os arquivos no diretório `src` devem aparecer em vermelho)

	* Adicione o novo arquivo ao _stage_ do Git
	  * Exemplo: `git add .` (adicionando todas as mudanças - _que estavam em vermelho_ - ao stage do Git)
	  *  `git status` (deve aparecer listado os arquivos do diretório `src` em verde)

	* Faça o `commit` inicial
	  * Exemplo: `git commit -m 'iniciando o projeto.'` (fazendo o primeiro commit)
	*  `git status` (deve aparecer uma mensagem tipo _nothing to commit_ )

3. Adicione a sua branch com o novo `commit` ao repositório remoto

	* Usando o exemplo anterior: `git push -u origin arthur-alves-brain-code`

4. Crie um novo `Pull Request`  _(PR)_
	* Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/MarcleyRosa/brain-code/pulls)
	* Clique no botão verde _"New pull request"_
	* Clique na caixa de seleção _"Compare"_ e escolha a sua branch **com atenção**
	* Coloque um título para o seu _Pull Request_
    * Exemplo: _"Cria função x"_
	* Clique no botão verde _"Create pull request"_
	* Adicione uma descrição para o _Pull Request_ e clique no botão verde _"Create pull request"_
	*  **Não se preocupe em preencher mais nada por enquanto!**
	* Volte até a [página de _Pull Requests_ do repositório](https://github.com/MarcleyRosa/brain-code/pulls) e confira que o seu _Pull Request_ está criado.
	
</details>

<details>
  <summary><strong>Testes</strong></summary><br />
   Todos os requisitos do projeto serão testados automaticamente por meio do Jest.

  Para rodar o avaliador automático localmente no seu projeto, execute um dos comandos abaixo:

  Para executar todos os testes utilize:
  ```bash
  npm test
  ```

  ***ou***

  Para executar um arquivo de teste específico, utilize `npm test nomeDoArquivoDeTeste`:

  ```bash
  npm test 03-displayElements
  ```

  ***ou simplesmente***

  ```bash
  npm test 03
  ```


</details>

<details>
  <summary><strong>Links auxiliares para o desenvolvimento
do projeto</strong></summary><br />
  
  - [JavaScript.com](http://javascript.com/)

  - [W3Schools](https://www.w3schools.com/js/default.asp)

  - [MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

  - [StackOverflow](https://pt.stackoverflow.com/questions/tagged/javascript)

</details>

## 1 - canDrive

<details>

<summary>
    Você deve implementar na função chamada <code>canDrive</code>:
</summary> <br />

### Verificação de Permissão para Dirigir

Este requisito tem como objetivo verificar se uma pessoa pode ou não dirigir com base em sua idade.

### Objetivo

Você deverá implementar na função chamada `canDrive` que:

1. Receba um único parâmetro:
   - `age`: A idade da pessoa (número).

2. Verifique se a idade da pessoa é suficiente para permitir a condução, considerando que a idade mínima para dirigir é 18 anos.

3. Imprima a seguinte mensagem com base na verificação:
   - Se a idade for 18 anos ou mais, imprima: `"Você pode dirigir."`
   - Se a idade for menor que 18 anos, imprima: `"Você não pode dirigir."`

## Passos para Implementação

1. **Usar uma Estrutura Condicional**:
   - Utilize uma estrutura condicional (`if`, `else`) para verificar se a idade da pessoa atende ou excede o valor mínimo.
   - Dentro de cada condição, use `console.log()` para imprimir a mensagem apropriada.

</details>

## 2 - checkLicenseEligibility

<details>

<summary>
    Você deve implementar na função chamada <code>checkLicenseEligibility</code>:
</summary> <br />

### Verificação de Elegibilidade para Licença de Condução

Este requisito tem como objetivo implementar uma função que verifica se uma pessoa pode obter uma licença de condução com base na sua idade e anos de experiência. A função deve retornar uma mensagem apropriada dependendo das condições de elegibilidade.

### Objetivo

Você deve implementar uma função chamada `checkLicenseEligibility` que:

1. Receba dois parâmetros:
   - `age`: A idade da pessoa (número).
   - `yearsOfExperience`: O número de anos de experiência de condução (número).

2. Retorne as seguintes mensagens com base nas condições:
   - Se a idade for menor que 18 anos, deve retornar: "Não pode obter a licença."
   - Se a idade for 18 anos ou mais, mas a experiência for menor que 2 anos, deve retornar: "Pode obter a licença, mas é necessária supervisão."
   - Se a idade for 18 anos ou mais e a experiência for de 2 anos ou mais, deve retornar: "Pode obter a licença sem supervisão."

## Passos para Implementação

1. **Estrutura de Controle**:
   - Use uma estrutura condicional (`if`, `else if`, `else`) para determinar qual mensagem retornar com base nos valores de `age` e `yearsOfExperience`.

2. **Retorno das Mensagens**:
   - Certifique-se de que cada condição retorne a mensagem correta conforme descrito nas especificações acima.

</details>

## 3 - displayElements

<details>
  <summary>
    Implemente a função <code>displayElements</code> escreva um código que imprima um por um de todos os elementos de um array.
  </summary> <br />

A função `displayElements` recebe um array e imprime cada elemento no console, um por um.

### Objetivo

Demonstrar o funcionamento da função `displayElements`, que percorre o array e exibe cada item em linhas separadas no console.

## Estrutura da Função

A função `displayElements`:
- Recebe um único parâmetro: um array de elementos.
- Percorre o array usando um laço `for` e imprime cada elemento no console.

### Exemplo de Uso

Para utilizar a função `displayElements`, basta passar um array como argumento. Veja o exemplo abaixo:

```javascript
const array = [1, 2, 3, 4, 5];
displayElements(array);
// Espera-se que imprima:
// 1
// 2
// 3
// 4
// 5
```


</details>

## 4 - findMaximum

<details>
  <summary>
  Implemente a função <code>findMaximum</code> que retorna o maior númeo dentro de um array
 
  </summary> <br />

A função `findMaximum` recebe um array por parâmetro.

Esta função `findMaximum` recebe um array de números e retorna o maior valor presente no array.

### Objetivo

Verificar o funcionamento da função `findMaximum`, que percorre um array e identifica o maior número entre os elementos.

### Estrutura da Função

A função `findMaximum`:
- Recebe um único parâmetro: um array de números.
- Percorre o array e compara cada elemento para determinar o maior valor.
- Retorna o maior número do array.
- deve retornar `undefined` quando chamada com um array vazio.

### Exemplo de Uso

Para utilizar a função `findMaximum`, basta passar um array de números como argumento. Veja o exemplo abaixo:

```javascript
const array = [5, 8, 2, 9, 3];
const maxNumber = findMaximum(array);
console.log(maxNumber); // Espera-se que imprima: 9
```

**O que será testado:**
Exemplo
  
- Retorna o valor 20 quando a função é chamada com o parâmetro [1, 6, 8, 5, 19, 20, 10];

- Retorna o valor -1 quando a função é chamada com o parâmetro [-1, -5, -3, -2];

- Retorna o valor 10 quando a função é chamada com o parâmetro [5, 8, 4, 10];
  
- Retorna `undefined` quando a função é chamada com o parâmetro [ ];

</details>


## 5 - printInnerElements

<details>
  <summary>
Implemente a função <code>printInnerElements</code> e escreva um código que imprima um por um dos elementos de um array, exceto o primeiro e o último

  </summary> <br />
A função `printInnerElements` recebe um array como parâmetro e deve imprimir um por um dos elementos menos o primeiro e o ultimo.

Se o array tiver um tamanho menor que 3 deve imprimir a seguinte mensagem `'Tamanho do array inválido'`
  
  Exemplo: se a função receber o array `[1, 5, 10, 12]`, o retorno deverá ser `[5, 10]`.

**O que será testado:**
  
- Retorne o valor `['JavaScript']` se a função receber `['HTML', 'JavaScript', 'CSS']`;

- Retorne o valor `[10, 5, 20]` se a função receber `[8, 10, 5, 20, 6]` ;

- Retorne o valor `'Tamanho do array inválido'` se a função receber `[4, 7]`.


</details>


## 6 - invertElements

<details>
  <summary>
Escreva um código que inverta a ordem dos elementos de um array.
Implemente a função <code>invertElements</code> que recebe um array e retorna esse array invertido 

  </summary> <br />
  
  Exemplo:

- Caso o parâmetro passado para a função `invertElements` seja o array `[8, 4, 60, 15]`, a função deverá retornar `[15, 60, 4, 8]`.

**O que será testado:**
  
- Retorne `[10, 7, 23]` quando o parâmetro passado na funcão invertElements seja `[23, 7, 10]`;

- Retorne `['uva', 'banana', 'maça']` quando o parâmetro passado na funcão invertElements seja `['maça', 'banana', 'uva']`;

</details>

## 7 - invertString

<details>
  <summary>
Implemente a função <code>invertString</code> que inverte uma string 

  </summary> <br />

A função `invertString` recebe uma string por parâmetro e retorna essa string invertida

Exemplo:

**O que será testado:**

- Retorne `etrevni` quando a string passada por parâ for `inverte`;

- Retorne `olleh` quando a string passada por parâ for `hello`;

</details>


## 8 - removeDuplicates

<details>
  <summary>
Implemente a função <code>removeDuplicates</code> e escreva um código que receba um array de números por parâmetro e retorne o array com os elementos duplicados removidos.

  </summary> <br />
  
  Por exemplo:

- Caso o parâmetro seja um array com valores `[9, 1, 2, 3, 9, 2, 7]`, a função deverá retornar `[9, 1, 2, 3, 7]`

**O que será testado:**

- Retorne `[9, 2, 3, 1]` quando o parâmetro passado na função removeDuplicates seja `[9, 1, 2, 3, 9, 1, 3]`;

- Retorne `[0, 4, 9, 1]` quando o parâmetro passado na função removeDuplicates seja `[0, 4, 4, 4, 9, 1]`;

- Retorne `[0]` quando o parâmetro passado na função removeDuplicates seja `[0, 0, 0]`.


</details>


## 9 - calculateNetSalary

<details>
  <summary>
Implemente a função <code>calculateNetSalary</code> que recebe por parâmetro o valor bruto (do tipo number) do salário e calcula o valor líquido.

</summary> <br />
Utilize if...else para escrever um código que, dado um salário bruto, calcule o salário líquido a ser recebido.
Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS (Instituto Nacional do Seguro Social) e o IR (Imposto de Renda).

A notação para um salário de R$1.500,10, por exemplo, deve ser 1500.10.

Para as faixas de impostos, use as seguintes referências:

INSS
Salário bruto até R$ 1.556,94: alíquota de 8%;
Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%;
Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%;
Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88.
IR
Até R$ 1.903,98: isento de imposto de renda;
De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto;
De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto;
De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto;
Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.
O cálculo deve ser o demonstrado a seguir
O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para o INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.

Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.

Para calcular o valor do IR, considera-se um salário-base (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, em que a alíquota é de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, tem-se:

R$ 2.670,00 - salário com INSS já deduzido;
7.5% - alíquota de imposto de renda, que representa um desconto de R$ 200,25;
R$ 142,80 - parcela a ser deduzida do imposto de renda.
Para obter o valor do imposto de renda, calcula-se: R$ 200,25 (que representa 7,5% de R$ 2.670,00) - R$ 142,80 (dedução do imposto de renda) = R$ 57,45.

Para obter o salário líquido, calcula-se: R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.

Resultado: Salário: R$ 2612.55.
   
Exemplo:

**O que será testado:**

- A função recebe um valor do tipo number por parâmetro

- Retorna `'Salário: R$ 2612.55.'` caso o parâmeto passado seja 3000;

- Retorna `'Salário: R$ 1820'` caso o parâmeto passado seja 2000;

- Retorna `'Salário: R$ 3532.1.'` caso o parâmeto passado seja 4200;


</details>

## 10 - formatPhoneNumber

<details>
  <summary>
Implemente a função  <code>formatPhoneNumber</code> que recebe um array com 11 números e retorna um número de telefone, respeitando parênteses, traços e espaços.

  </summary> <br />

Exemplo: caso o parâmetro da função seja `[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]`, a função `formatPhoneNumber` deverá retornar `(12) 34567-8901`.

- Retorne a frase `'Array com tamanho incorreto.'` se a função receber um array com tamanho diferente de 11;

- Retorne a string `'não é possível gerar um número de telefone com esses valores'` caso algum dos números do array seja **menor** que 0, **maior** que 9 ou se repita 3 vezes ou mais.


**O que será testado:**
  
- Retorne a string `'Array com tamanho incorreto.'` caso o array tenha o tamanho diferente de 11;

- Retorne a string `"não é possível gerar um número de telefone com esses valores"` caso algum dos números do array seja menor que 0;

- Retorne a string `"não é possível gerar um número de telefone com esses valores"` caso algum número do array seja maior que 9;

- Retorne a string `"não é possível gerar um número de telefone com esses valores"` caso algum número do array se repetir 3 vezes ou mais;

- Retorne um número de telefone, respeitando parênteses, traços e espaços caso os números do array estejam de acordo com as especificações.


</details>

## 11 - getIntervalData

<details>
  <summary>
Implemente a função  <code>getIntervalData</code> que recebe um array e retorna um objeto com duas key, uma delas é arrayNoIntervalo que deve conter um array com o intervalo encontrado e a outa é o contador que deve conter quantos números contem nesse intervalo 
  </summary> <br />

  A função recebe 3 parâmetos, o primeiro é um `array` de números, o segundo é um número que representa o `inicio` do intervalo selecionado, o terceiro representa o `fim` do intervalo selecionado

Exemplo: caso o parâmetro da função seja `[1, 2, 3, 4, 5, 1], 2, 4`, a função `getIntervalData` deverá retornar `{ arrayNoIntervalo: [2, 3, 4], contador: 3 };`.

**O que será testado:**

- Retorne o objeto `{ arrayNoIntervalo: [2, 3, 4], contador: 3 };` se a essa função for chamada com esses parâmetros `getIntervalData([1, 2, 3, 4, 5, 1], 2, 4)`;

```javascript
const array = [1, 2, 3, 4, 5, 1]
const intervalo = getIntervalData(array, 2, 4);
console.log(intervalo); // Espera-se que imprima: { arrayNoIntervalo: [2, 3, 4], contador: 3 };
```

- Retorne o objeto `{ arrayNoIntervalo: [20, 63, 80], contador: 3 };` se a essa função for chamada com esses parâmetros `getIntervalData([20, 14, 5, 6, 9, 63, 80, 120], 20, 80)`;

```javascript
const array = [20, 14, 5, 6, 9, 63, 80, 120]
const intervalo = getIntervalData(array, 20, 80);
console.log(intervalo); // Espera-se que imprima: { arrayNoIntervalo: [20, 63, 80], contador: 3 };
```

- Retorne o objeto `{ arrayNoIntervalo: [15, 21, 30], contador: 3 };` se a essa função for chamada com esses parâmetros `getIntervalData([15, 4, 6, 9, 21, 30, 7], 15, 30)`;

```javascript
const array = [15, 4, 6, 9, 21, 30, 7]
const intervalo = getIntervalData(array, 15, 30);
console.log(intervalo); // Espera-se que imprima: { arrayNoIntervalo: [15, 21, 30], contador: 3 };
```

</details>

## 12 - Method Restrictions

<details>
  <summary>
  Implemente em todas as funções a resolução dos requisitos sem a utilização de métodos.

  </summary> <br />

  **OBS: Implemente em todos os requisitos do ( 1° ao 11° )** <br /> <br />
  Exemplo: Uma solução onde o problema a ser resolvido é elevar um número ao quadrado e que pode ser resolvida com métodos e sem métodos <br /> <br />



  **Com Métodos:**
  ```javascript
    function aoQuadrado(n) {
      return Math.pow(n, 2);
    }
  ```

  **Sem Métodos:**
  ```javascript
    function aoQuadrado(n) {
      return n * n;
    }
  ```
  ### Métodos proibidos incluem (mas não se limitam a):

  - `includes`
  - `map`
  - `filter`
  - `find`
  - `forEach`
  - `reduce`
  - `push`, `splice`
  - `indexOf`, `lastIndexOf`
  - `Math.max`, `Math.min`, `Math.pow`, `Math.abs`, etc.
  - `Object.keys`, `Object.values`, `Object.entries`, etc.
</details>
