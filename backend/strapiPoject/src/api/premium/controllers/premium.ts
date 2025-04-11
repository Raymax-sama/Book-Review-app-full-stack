/**
 * Premium controller
 */

export default {
  // Mettre à jour l'utilisateur vers premium (version simplifiée sans paiement)
  async upgrade(ctx) {
    const { id } = ctx.state.user;
    
    if (!id) {
      return ctx.badRequest('Utilisateur non authentifié');
    }
    
    // Mettre à jour l'utilisateur vers premium
    await strapi.entityService.update('plugin::users-permissions.user', id, {
      data: {
        subscription: 'premium'
      }
    });
    
    return { 
      success: true, 
      message: 'Abonnement mis à jour vers premium avec succès' 
    };
  },
  
  // Obtenir le statut d'abonnement actuel
  async getStatus(ctx) {
    const { id } = ctx.state.user;
    
    if (!id) {
      return ctx.badRequest('Utilisateur non authentifié');
    }
    
    const user = await strapi.entityService.findOne(
      'plugin::users-permissions.user', 
      id,
      { fields: ['subscription'] }
    );
    
    return {
      subscription: user.subscription || 'free'
    };
  }
};