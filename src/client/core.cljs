(ns client.core
  (:require [goog.dom :as gdom]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [client.aframe-react :as a-vr]
            [client.parser :refer [read mutate]]
            [client.uis.sphere :as sphere]
            [client.uis.many-counters :as many-counters]))

(def init-data {:counts [{:id 0 :value 0}
                         {:id 1 :value 0}
                         {:id 2 :value 2}]})
(defonce app-state (atom (om/tree->db many-counters/ui init-data true)))

(def reconciler
  (om/reconciler
    {:state app-state
     :parser (om/parser {:read read :mutate mutate})}))

(om/add-root! reconciler
  many-counters/ui (gdom/getElement "app"))
