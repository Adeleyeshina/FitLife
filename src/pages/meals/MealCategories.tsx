import { mealCategories } from "../../constant/data"


const MealCategories = () => {
  return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {mealCategories.map((category, index) => (
              <div key={index} className="group hover:shadow-[0px_0px_12px_0px_rgb(0_0_0_/0.1)] transition-all  rounded-sm cursor-pointer hover:-translate-y-1 bg-card text-card-foreground shadow-[0px_0px_5px_0px_rgb(0_0_0_/0.2)]">
                  <div className="text-center flex flex-col space-y-1.5 p-6 py-8">
                      <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-linear-to-br ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                          <category.icon className="h-8 w-8 text-white" />
                      </div>
                      <p className="text-xl font-semibold leading-none tracking-tight">{category.name}</p>
                  </div>
              </div>
          ))}
      </div>
  )
}

export default MealCategories