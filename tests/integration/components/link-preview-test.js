/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'link-preview',
  'Integration: LinkPreviewComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#link-preview}}
      //     template content
      //   {{/link-preview}}
      // `);

      this.render(hbs`{{link-preview}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
