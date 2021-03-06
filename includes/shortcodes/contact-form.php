<?php
/**
 * Shortcode: Contact Form
 *
 * @package Cedars/Shortcodes
 */

/**
 * Contact Form.
 *
 * @param array $atts The shortcode attributes.
 * @return string
 */
function cedars_shortcode_contact_form( $atts ) {
	$padding = ! empty( $atts['padding'] ) ? absint( $atts['padding'] ) : 0;
	$inquiry = ! empty( $atts['inquiry'] ) ? $atts['inquiry'] : '';

	ob_start();

	/**
	 * $padding is absint, no need to escape.
	 * @phpcs:disable WordPress.Security.EscapeOutput.OutputNotEscaped
	 */
	?>

	<div class="pa<?php echo $padding; ?>">
		<div id="contact-form"
		<?php
		if ( ! empty( $inquiry ) ) {
			printf( 'data-inquiry="%s"', esc_attr( $inquiry ) ); }
		?>
		></div>
	</div>

	<?php
	// @phpcs:enable
	return ob_get_clean();
}

add_shortcode( 'the-cedars-contact-form', 'cedars_shortcode_contact_form' );
