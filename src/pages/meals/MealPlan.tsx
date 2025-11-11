
import { Clock } from 'lucide-react';
import Badge from '../../components/ui/Badge'
import { mealPlans } from '../../constant/data'
import Button from '../../components/ui/Button';

const MealPlan = () => {
    const getDifficultyColor = (difficulty: string) => {
        switch (difficulty) {
            case 'Easy': return 'bg-chart-3/20 text-chart-3 border-chart-3/30';
            case 'Medium': return 'bg-primary/20 text-primary border-primary/30';
            case 'Hard': return 'bg-chart-2/20 text-chart-2 border-chart-2/30';
            default: return 'bg-secondary';
        }
    };

  return (
      <div>
          <h2 className="text-3xl font-bold mb-6">Recommended Meals</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mealPlans.map((meal, index) => (
                  <div key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 rounded-xl  bg-card text-card-foreground shadow">
                      <div className='flex flex-col space-y-1.5 p-6'>
                          <div className="flex items-start justify-between mb-4">
                              <Badge className='border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80'>{meal.category}</Badge>
                              <Badge className={`text-foreground ${getDifficultyColor(meal.difficulty)},`}>
                                  {meal.difficulty}
                              </Badge>
                          </div>
                          <div className="text-xl mb-2 group-hover:text-primary transition-colors font-semibold leading-none tracking-tight">
                              {meal.name}
                          </div>
                          <div className='text-sm text-muted-foreground'>{meal.description}</div>
                      </div>
                      <div className="space-y-4 p-6 pt-0">
                          {/* Macros */}
                          <div className="bg-secondary/50 rounded-lg p-4">
                              <div className="grid grid-cols-4 gap-2 text-center">
                                  <div>
                                      <div className="text-2xl font-bold text-primary">{meal.calories}</div>
                                      <div className="text-xs text-muted-foreground">Calories</div>
                                  </div>
                                  <div>
                                      <div className="text-2xl font-bold">{meal.protein}g</div>
                                      <div className="text-xs text-muted-foreground">Protein</div>
                                  </div>
                                  <div>
                                      <div className="text-2xl font-bold">{meal.carbs}g</div>
                                      <div className="text-xs text-muted-foreground">Carbs</div>
                                  </div>
                                  <div>
                                      <div className="text-2xl font-bold">{meal.fats}g</div>
                                      <div className="text-xs text-muted-foreground">Fats</div>
                                  </div>
                              </div>
                          </div>

                          {/* Prep Time */}
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Clock className="h-4 w-4" />
                              Prep time: {meal.prepTime}
                          </div>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-2">
                              {meal.tags.map((tag, tagIndex) => (
                                  <Badge key={tagIndex} className="text-xs text-foreground">
                                      {tag}
                                  </Badge>
                              ))}
                          </div>

                          <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-primary text-primary-foreground shadow hover:bg-primary/90 h-8 rounded-md px-3 text-xs">
                              View Recipe
                          </Button>
                      </div>
                  </div>
              ))}
          </div>
      </div>
  )
}

export default MealPlan