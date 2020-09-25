// Importe `shallowMount` do Vue Test Utils e o componente sendo testado
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Card from '@/components/Card.vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

const localVue = createLocalVue()

// install plugins as normal
localVue.use(BootstrapVue)

// Monte o componente
const wrapper = shallowMount(Card, {
  localVue,
  mocks: {
    $scrollTo: () => {},
  }
})


// Aqui estão alguns testes Jest, apesar de poder usar
// qualquer test runner / assertion library que preferir
describe('Card', () => {
  // Inspeciona as opções do componente
  it('has a created hook', () => {
    expect(typeof Card.created).toBe('function')
  })

  // Avalia os resultados das funções
  // nas opções do componente
  it('sets the correct default data', () => {
    expect(typeof Card.data).toBe('function')
    const defaultData = Card.data()

    expect(typeof defaultData.card).toBe('object');
    expect(defaultData.loading).toBe(true);
    expect(typeof defaultData.attack).toBe('object');
  })

  // Inspeciona a instância do componente ao montar
  it('correctly sets the message when created', () => {
    
    expect(typeof wrapper.vm.$data.card).toBe('object');
    expect(wrapper.vm.$data.loading).toBe(true);
    expect(typeof wrapper.vm.$data.attack).toBe('object');
  })

  // Monta uma instância e inspeciona a saída de renderização
  it('renders the correct message', () => {
    
  })
})