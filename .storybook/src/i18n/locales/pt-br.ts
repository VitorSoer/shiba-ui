export const pt = {
  translation: {
    colors_title: 'Cores',
    colors_description:
      'Esta seção apresenta a paleta de cores utilizada no design system. Cada cor é definida pelo seu código hexadecimal e é usada para garantir uma identidade visual consistente e coesa em toda a aplicação.',
    icons_title: 'Ícones',
    icons_description:
      'Esta seção exibe os ícones disponíveis no design system. Os ícones são uma parte crucial da interface, fornecendo elementos visuais que melhoram a experiência do usuário. Cada ícone é representado por um caminho SVG.',
    typography_title: 'Tipografia',
    typography_description:
      'Nesta documentação, os tamanhos de fonte são exibidos em pixels como referência, mas os valores reais utilizados estão em `rem`.',
    typography_sample:
      'O Shiba Inu é uma raça do tipo Spitz com cauda enrolada.',
    font_sizes_title: 'Tamanhos de Fonte',
    font_sizes_description:
      'Os tamanhos de fonte são definidos usando a unidade `rem`, onde o tamanho base é 1rem = 10px (com base em um tamanho de fonte raiz de 62,5% do tamanho padrão do navegador). Essa abordagem simplifica a escalabilidade e garante consistência no design.',
    font_family_title: 'Família de Fontes',
    font_family_description:
      'O design system inclui duas famílias de fontes: a padrão para o texto principal e uma alternativa para estilos adicionais, garantindo uma experiência tipográfica versátil.',
    font_weight_title: 'Peso da Fonte',
    font_weight_description:
      'Os pesos das fontes são categorizados para fornecer uma variedade de ênfases tipográficas e hierarquia.',
    docs_icon_selection: 'Aceita nomes de ícones predefinidos para seleção.',
    docs_color: 'Aceita cores de tema predefinidas ou valores de cor CSS.',
    docs_size: 'Aceita valores em formato `number` para definir o tamanho.',
    docs_size_predefined:
      'Aceita opções predefinidas ou valores em `string` para definir o tamanho.',
    docs_content: 'Aceita uma `string` para definir o conteúdo do texto.',
    docs_font_family:
      'Aceita famílias de fontes predefinidas ou personalizadas para definir o texto.',
    docs_values_predefined:
      'Aceita valores predefinidos ou valores em formato de `string`.',
    docs_text_decoration:
      'Aceita valores no formato `string` para definir a decoração do texto.',
    docs_number: 'Aceita valores no formato `number`.',
    docs_font_weight:
      'Aceita opções predefinidas ou valores em `string` para definir o peso da fonte.',
    docs_text_align:
      'Aceita opções predefinidas ou valores em `string` para alinhar o texto.',
    docs_letter_spacing:
      'Aceita um `number` para definir o espaçamento entre letras do texto.',
    docs_hide: 'Aceita um `boolean` para ocultar o componente.',
    docs_line_height: 'Aceita um `number` para definir a altura da linha.',
    docs_sample_text: 'Texto de exemplo',
    docs_click: 'Aceita uma função para ser chamada ao clicar no componente.',
    docs_loading:
      'Aceita um `boolean` para definir o componente como carregando.',
    docs_disabled:
      'Aceita um `boolean` para definir o componente como desativado.',
    docs_variant: 'Aceita opções predefinidas para definir a variante.',
    docs_shadow: 'Aceita opções predefinidas para definir a sombra.',
    docs_full_width:
      'Aceita um `boolean` para definir se o componente deve ocupar todo o espaço disponível.',
    docs_copied: 'Copiado!',
    docs_toast: `

O componente \`ToastContainer\` é utilizado para exibir notificações de toast na sua aplicação. 

## Configuração

Adicione o \`ToastContainer\` no seu componente:

\`\`\`jsx
import React from 'react';
import ToastContainer, { toast } from 'shiba-ui';

function App() {
  return (
    <div>
      {/* Outros componentes */}
      <ToastContainer />
    </div>
  );
}
  
export default App;
\`\`\`

## Utilização

Utilize as funções de toast para exibir mensagens:

\`\`\`jsx
import { toast } from 'shiba-ui';

const toastSuccess = toast.success('Mensagem de exemplo');
const toastError = toast.error('Mensagem de exemplo');
const toastNeutral = toast.neutral('Mensagem de exemplo');
const toastWarning = toast.warning('Mensagem de exemplo');
\`\`\`

## Propriedades Aceitas (\`IToast\`)

As propriedades que podem ser passadas para as funções de toast são:
  
- **message**:  Mensagem a ser exibida.
- **timeout**: Tempo de exibição do toast (em milissegundos).
- **$background**: Cor de fundo do toast.
- **$messageColor**: Cor da mensagem do toast.
- **$borderColor**: Cor da borda do toast.
- **$width:**: Largura do toast.
- **$height**: Altura do toast.
- **$borderRadius**: Borda arredondada do toast.

\`\`\`jsx
const customToast = toast.success('Mensagem de exemplo', {
  timeout: 5000,
  $background: 'charcoal',
  $messageColor: 'secondary',
  $borderColor: 'secondary',
  $borderRadius: 'sm',
  $height: 50,
  $width: 500,
})
\`\`\`
`,

    docs_on_change:
      'Aceita uma função para ser chamada ao alterar o componente.',
    docs_value: 'Aceita um `number` para definir o valor.',
    spacing_title: 'Espaçamento',
    spacing_description:
      'Esta seção apresenta os espaçamentos disponíveis no design system. Os espaçamentos desempenham um papel essencial no layout, garantindo um alinhamento consistente e uma hierarquia visual clara entre os elementos.',
    settings_language: 'Idioma',
    settings_confirm: 'Confirmar',
    settings_theme: 'Tema',
  },
};
