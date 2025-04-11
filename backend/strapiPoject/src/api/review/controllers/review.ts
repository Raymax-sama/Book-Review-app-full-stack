/**
 * review controller
 */

import { factories } from '@strapi/strapi'

// Define a proper type for the user with reviews
interface UserWithReviews {
  id: string;
  reviews?: any[];
  reviewCount?: number | string;
  subscription?: 'free' | 'premium';
}

export default factories.createCoreController('api::review.review', ({ strapi }) => ({
  // Override create method to add limit logic
  async create(ctx) {
    // Get the authenticated user
    const user = ctx.state.user;
    
    // Check if user is authenticated
    if (!user) {
      return ctx.unauthorized('You must be logged in to create a review');
    }
    
    // Get complete user information with proper typing
    const fullUser = await strapi.entityService.findOne(
      'plugin::users-permissions.user',
      user.id,
      { 
        populate: {
          reviews: true,
          subscription: true
        } 
      }
    ) as UserWithReviews;
    
    // Check if free user has reached their limit
    if (
      (!fullUser.subscription || fullUser.subscription === 'free') && 
      fullUser.reviews && 
      fullUser.reviews.length >= 2
    ) {
      return ctx.badRequest('Free users are limited to 2 reviews. Upgrade to Premium for unlimited reviews!');
    }
    
    // Update review count - fix the type issue with proper conversion
    const currentCount = typeof fullUser.reviewCount === 'string' 
      ? parseInt(fullUser.reviewCount || '0', 10) 
      : (fullUser.reviewCount || 0);
    
    await strapi.entityService.update(
      'plugin::users-permissions.user',
      user.id,
      {
        data: {
          reviewCount: currentCount + 1
        }
      }
    );
    
    // Add user to the request
    ctx.request.body.data = {
      ...ctx.request.body.data,
      users_permissions_user: user.id
    };
    
    // Call the original create method
    const response = await super.create(ctx);
    
    return response;
  }
}));
