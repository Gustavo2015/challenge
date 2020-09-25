// Importe `shallowMount` do Vue Test Utils e o componente sendo testado
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Cards from '@/components/Cards.vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

const localVue = createLocalVue()

// install plugins as normal
localVue.use(BootstrapVue)

// Monte o componente
const wrapper = shallowMount(Cards, {
  localVue
})


// Aqui estão alguns testes Jest, apesar de poder usar
// qualquer test runner / assertion library que preferir
describe('Cards', () => {
  // Inspeciona as opções do componente
  it('has a created hook', () => {
    expect(typeof Cards.created).toBe('function')
  })

  // Avalia os resultados das funções
  // nas opções do componente
  it('sets the correct default data', () => {
    expect(typeof Cards.data).toBe('function')
    const defaultData = Cards.data()

    expect(typeof defaultData.cards).toBe('object');
    expect(defaultData.page).toBe(1);
    expect(defaultData.totalPages).toBe(0);
    expect(defaultData.search).toBe(null);
    expect(defaultData.loading).toBe(true);
  })

  // Inspeciona a instância do componente ao montar
  it('correctly sets the message when created', () => {
    
    expect(typeof wrapper.vm.$data.cards).toBe('object');
    expect(wrapper.vm.$data.page).toBe(1);
    expect(wrapper.vm.$data.totalPages).toBe(0);
    expect(wrapper.vm.$data.search).toBe(null);
    expect(wrapper.vm.$data.loading).toBe(true);
  })

  // Monta uma instância e inspeciona a saída de renderização
  it('renders the correct message', () => {
    
  })
})