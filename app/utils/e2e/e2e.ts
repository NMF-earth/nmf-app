const setAccessibilityProps = id =>
  process.env.GENERATE_AL ? { accessibilityLabel: id } : {};

/* Example 1:
<Text {...setAccessibilityProps(accessibilityLabel)} color={color} semiBold style={styles.label}>
        {title}
</Text>*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Example 2:
  <TouchableOpacity onPress={this._onPressButton} {...setAccessibilityProps('LOGIN')}>
      <Image
        style={styles.button}
        source={require('./myButton.png')}
      />
  </TouchableOpacity>*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Example 3:
<Button
    disabled={disabled}
    semiBold
    title={editing ? t('EDIT_DONE') : t('EDITING')}
    onPress={onPress}
    {...setAccessibilityProps(accessibilityId)}
    /> */

const setAccessibilityPropsArray = id =>
  process.env.GENERATE_AL ? { accessibilityLabels: id } : {};

/* Example:it can be used with SegementedControlTab 
  <SegmentedControlTab
    values={['First', 'Second', 'Third']}
    selectedIndex={this.state.selectedIndex}
    onTabPress={this.handleIndexChange}
    {...setAccessibilityPropsArray(['TAB_0', 'TAB_1'])}
    /> */

const getAL = id => (process.env.GENERATE_AL ? id : null);

/* Example: 
renderSections = () => {
  const section = [
    {
      title: t('TITTLE'),
      content: this.renderDate(),
      accessibilityLabel: getAL('SECTION_1'),
    },
  ];
}*/

const isNotAccessible = () =>
  process.env.GENERATE_AL ? { accessible: false } : {};
/* Example: use together with setAccessibilityProps() to make clickable component down the hierarchy */

export default {
  setAccessibilityProps,
  setAccessibilityPropsArray,
  getAL,
  isNotAccessible
};
