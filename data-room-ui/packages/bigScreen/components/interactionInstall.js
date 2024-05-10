// 根据组件的type来返回组件的默认的完整的交互信息
function getInteractionInstall (type) {
  switch (type) {
    case 'BaseBar':
      return import(/* webpackChunkName: "BaseBarConfig" */ '@gcpaas/data-room-ui/packages/components/G2Plots/BaseBar/interaction/index')
    case 'GroupBar':
      return import(/* webpackChunkName: "BaseBarConfig" */ '@gcpaas/data-room-ui/packages/components/G2Plots/GroupBar/interaction/index')
    case 'BaseColumn':
      return import(/* webpackChunkName: "BaseBarConfig" */ '@gcpaas/data-room-ui/packages/components/G2Plots/BaseColumn/interaction/index')
    case 'texts':
      return import(/* webpackChunkName: "BaseBarConfig" */ '@gcpaas/data-room-ui/packages/components/texts/interaction/index')
    case 'BaseMap':
      return import(/* webpackChunkName: "BaseBarConfig" */ '@gcpaas/data-room-ui/packages/components/map/BaseMap/index')
    case 'BaseTable':
      return import(/* webpackChunkName: "BaseBarConfig" */ '@gcpaas/data-room-ui/packages/components/tables/BaseTable/index')
  }
}
export function getInteraction (type) {
  return new Promise((resolve, reject) => {
    getInteractionInstall(type)
      .then((configModule) => {
        resolve(configModule.default)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
