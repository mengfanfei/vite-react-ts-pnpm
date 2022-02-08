import { memo } from 'react';
import './index.css'

interface SvgIconProps {
  name: string // svg名字或者iconfont名字
  prefix?: string // 图标前缀
  color?: string // 颜色
  [propsName: string]: any
}

const SvgIcon = ({ name, prefix = 'icon', color = '#333', ...props }: SvgIconProps) => {
  const iconName = `#${prefix}-${name}` // svg名字
  const iconfontClass = `iconfont icon-${name}` // iconfont 类名
  if (prefix === 'icon') {
    return  (
      <svg {...props} className={'svg-icon'} aria-hidden="true">
        <use href={iconName} fill={color} />
      </svg>
    )
  } else {
    return (
      <i {...props} className={iconfontClass} aria-hidden="true" />
    )
  }
};

export default memo(SvgIcon)