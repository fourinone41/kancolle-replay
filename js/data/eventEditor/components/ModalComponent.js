const ModalComponent = {
	props: ['active'],
	emits: ['vclose'],
	data: () => ({
		
	}),
	methods: {
		focusContentTop: function() {
			this.$refs.contentTop.focus();
		},
		focusContentBottom: function() {
			this.$refs.contentBottom.focus();
		},
		onkeypressClose: function() {
			if (event.key == 'Escape') {
				this.$emit('vclose');
			}
		},
	},
	watch: {
		active: function() {
			if (this.active) {
				this.$refs.content.style = '';
				this.$nextTick(() => {
					this.focusContentTop();
					let rect = this.$refs.content.getBoundingClientRect();
					let w = Math.ceil(rect.width/2)*2;
					let h = Math.ceil(rect.height/2)*2;
					this.$refs.content.style = 'width:' + w + ';height:' + h;
				});
			}
		},
	},
	template: `
	<div class="overlayDark" tabindex="1" @focus.prevent="focusContentTop" @click="$emit('vclose')"></div>
	<div class="modalContent" tabindex="-1" ref="content" @keydown="onkeypressClose">
		<div tabindex="0" @focus.prevent="focusContentBottom"></div>
		<div tabindex="-1" ref="contentTop"></div>
		<div class="modalContentMain"><slot></slot></div>
		<div tabindex="-1" ref="contentBottom"></div>
		<div tabindex="0" @focus.prevent="focusContentTop"></div>
	</div>
	`
};