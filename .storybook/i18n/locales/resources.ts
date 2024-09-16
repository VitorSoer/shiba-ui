export const resources = {
  en: {
    translation: {
      colors_title: 'Colors',
      colors_description:
        'This section presents the color palette used in the design system. Each color is defined by its hex code and is used to ensure a consistent and cohesive visual identity across the application.',
      icons_title: 'Icons',
      icons_description:
        'This section showcases the icons available in the design system. Icons are a crucial part of the UI, providing visual cues that enhance the user experience. Each icon is represented by an SVG path.',
      typography_title: 'Typography',
      typography_description:
        'In this documentation, font sizes are displayed in pixels for reference, but the actual values used are in `rem`.',
      typography_sample:
        'The Shiba Inu is a Spitz-type breed with a curled tail.',
      font_sizes_title: 'Font Sizes',
      font_sizes_description:
        "Font sizes are defined using the `rem` unit, where the base size is 1rem = 10px (based on a root font size of 62.5% of the browser's default size). This approach simplifies scaling and ensures consistency across the design.",
      font_family_title: 'Font Family',
      font_family_description:
        'The design system includes two font families: the default for primary text and an alternative for additional styles, ensuring a versatile typographic experience.',
      font_weight_title: 'Font Weight',
      font_weight_description:
        'Font weights are categorized to provide a range of typographic emphasis and hierarchy.',
      docs_icon_selection: 'Accepts predefined icon names for selection.',
      docs_color: 'Accepts predefined theme colors or CSS color values.',
      docs_size: 'Accepts `number` values to specify the size.',
      docs_size_predefined:
        'Accepts predefined options or `string` values to define the size.',
      docs_content: 'Accepts a `string` to set the text content.',
      docs_font_family:
        'Accepts predefined or custom font families to set the text.',
      docs_values_predefined:
        'Accepts predefined values or values in `string` format.',
      docs_text_decoration:
        'Accepts `string` values to define the text decoration.',
      docs_number: 'Accepts values in `number` format.',
      docs_font_weight:
        'Accepts predefined options or `string` values to define the font weight.',
      docs_text_align:
        'Accepts predefined options or `string` values to align the text.',
      docs_letter_spacing:
        'Accepts a `number` to set the letter spacing of the text.',
      docs_hide: 'Accepts a `boolean` to hide the component.',
      docs_line_height: 'Accepts a `number` to set the line height.',
      docs_sample_text: 'Sample Text',
      docs_click: 'Accepts a function to be called on component click.',
      docs_loading: 'Accepts a `boolean` to set the component to loading.',
      docs_disabled: 'Accepts a `boolean` to set the component to disabled.',
      docs_variant: 'Accepts predefined options to set the variant.',
      docs_shadow: 'Accepts predefined options to set the box shadow.',
      docs_elevation: 'Accepts predefined options to set the elevation.',
      docs_full_width:
        'Accepts a `boolean` to determine if the component should occupy the full available space.',
      docs_copied: 'Copied!',
      docs_toast: `

The \`ToastContainer\` component is used to display toast notifications in your application. 

## Configuration

Add the \`ToastContainer\` to your component:

\`\`\`jsx
import React from 'react';
import ToastContainer, { toast } from 'shiba-ui';

function App() {
  return (
    <div>
      {/* Other components */}
      <ToastContainer />
    </div>
  );
}
  
export default App;
\`\`\`

## Usage

Use the toast functions to display messages:

\`\`\`jsx
import { toast } from 'shiba-ui';

const toastSuccess = toast.success('Example message');
const toastError = toast.error('Example message');
const toastNeutral = toast.neutral('Example message');
const toastWarning = toast.warning('Example message');
\`\`\`

## Accepted Properties (\`IToast\`)

The properties that can be passed to the toast functions are:
  
- **message**:  Message to be displayed.
- **timeout**: Display time of the toast (in milliseconds).
- **$background**: Background color of the toast.
- **$messageColor**: Message color of the toast.
- **$borderColor**: border color of the toast.
- **$width:**: Width of the toast.
- **$height**: Height of the toast.
- **$borderRadius**: Border radius of the toast.

\`\`\`jsx
const customToast = toast.neutral('Mensagem de exemplo', {
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
        'Accepts a function to be called when the component is changed.',
      docs_value: 'Accepts a `number` to set the value.',
    },
  },

  pt: {
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
      docs_elevation: 'Aceita opções predefinidas para definir a elevação.',
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
const customToast = toast.neutral('Mensagem de exemplo', {
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
    },
  },
};
